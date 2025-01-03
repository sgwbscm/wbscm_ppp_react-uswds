import { useState, useEffect, useRef, Suspense } from 'react'
import * as XLSX from 'xlsx'
import Header from './Header'
import Footer from './Footer'
import './css/uswds.css'
import './js/uswds.js'
import './js/uswds-init.js'

import { useLoaderData } from 'react-router-dom'

export async function loader({ request }) {
  const url = new URL(request.url)
  return { url }
}

function Loading() {
  //<img className="usda-logo-img" width="70px" height="70px" src="/dist/assets/loader.gif" alt="Loading..."/>
  ;<h2> Loading..</h2>
}

export default function App() {
  //test 2
  const { url } = useLoaderData()
  const qSolicitation = url.searchParams.get('solicitation')
  const qHref = url.href
  let qHrefDefault = ''
  if (qHref.includes('localhost') || qHref.includes('amazonaws')) {
    qHrefDefault =
      'https://1gc4yepshk.execute-api.us-east-1.amazonaws.com/sbx/lambda'
  } else {
    qHrefDefault = url.origin + '/ppp/search'
  }

  const [serviceURL, setServiceURL] = useState(qHrefDefault)

  const [searchSolNum, setSearchSolNum] = useState('')
  const [searchPID, setSearchPID] = useState('')
  const [searchAwardId, setSearchAwardId] = useState('')
  const [searchActiveSol, setSearchActiveSol] = useState(true)
  const [searchAwardDate, setSearchAwardDate] = useState('Any')
  const [searchDocumentCategory, setSearchDocumentCategory] =
    useState('Solicitation')
  const [searchOfferDate, setSearchOfferDate] = useState('Any')
  const [searchPackageNum, setSearchPackageNum] = useState('')
  const [searchProductCategory, setSearchProductCategory] = useState('')
  const [searchProductName, setSearchProductName] = useState('')
  const [searchPublishDate, setSearchPublishDate] = useState('Any')
  const [searchPurchaseGroup, setSearchPurchaseGroup] = useState('')
  const [searchSolMethod, setSearchSolMethod] = useState('RFQ')
  const [searchLatestVersion, setSearchLatestVersion] = useState(true)
  const [searchPerformanceDate, setSearchPerformanceDate] = useState('')

  const [column, setColumn] = useState([])
  const [files, setFiles] = useState([])

  const [filter, setFilter] = useState([])

  const [links, setLinks] = useState([])
  const [solURL, setSolURL] = useState()
  const [solURLCopied, setSolURLCopied] = useState(false)

  const [sort, setSort] = useState({ keyToSort: 'sol_num', direction: 'asc' })

  const [columnId, setColumnId] = useState(1)

  const [pubDateValue, setPubDateValue] = useState('Last 60 Days')

  const [hideAdavanceOptions, setHideAdavanceOptions] = useState(true)

  const [docCategory, setDocCategory] = useState('Solicitations')

  function handleSearch() {
    let searchParameters = {
      sol_num: searchSolNum,
      pId: searchPID,
      awardId: searchAwardId,
      active: searchActiveSol,
      awardDate: searchAwardDate,
      docCategory: searchDocumentCategory,
      offerDate: searchOfferDate,
      pkgNum: searchPackageNum,
      prodCategory: searchProductCategory,
      prodName: searchProductName,
      publishDate: searchPublishDate,
      purchaseGroup: searchPurchaseGroup,
      solMethod: searchSolMethod,
      latest: searchLatestVersion,
      perfDate: searchPerformanceDate,
    }
    //setSearchPerformanceDate(document.getElementById('perf-date').value)

    console.log(
      'searchSolNum= ' + searchSolNum,
      ' | searchPID= ' + searchPID,
      ' | searchAwardId= ' + searchAwardId,
      ' | searchActiveSol= ' + searchActiveSol,
      ' | awardDate= ' + searchAwardDate,
      ' | searchDocumentCategory= ' + searchDocumentCategory,
      ' | searchOfferDate= ' + searchOfferDate,
      ' | searchPackageNum= ' + searchPackageNum,
      ' | searchProductCategory= ' + searchProductCategory,
      ' | searchProductName= ' + searchProductName,
      ' | searchPublishDate= ' + searchPublishDate,
      ' | searchPurchaseGroup= ' + searchPurchaseGroup,
      ' | searchSolMethod= ' + searchSolMethod,
      ' | searchLatestionVersion= ' + searchLatestVersion,
      ' | searchPerformanceDate= ' + searchPerformanceDate,
    )
  }

  function handleLatestVersion() {}

  function handleActiveSolicitation() {}

  const headers = [
    {
      id: 1,
      label: 'Solicitation Number',
      key: 'sol_num',
    },
    {
      id: 2,
      label: 'Procurement Instrument Identifier',
      key: 'proc_id',
    },
    {
      id: 3,
      label: 'Current Date Offers Are Due',
      key: 'offer_dt',
    },
    {
      id: 4,
      label: 'Updated Date',
      key: 'sol_updt_dt',
    },
    {
      id: 5,
      label: 'Product Category',
      key: 'mat_grp',
    },
    {
      id: 6,
      label: 'Document Category',
      key: 'doc_cat',
    },
    {
      id: 7,
      label: 'Solicitation Documents',
      key: 'doc',
    },
  ]

  function handleHideAdavanceOptions() {
    if (hideAdavanceOptions) {
      setHideAdavanceOptions(false)
    } else {
      setHideAdavanceOptions(true)
    }
  }

  function handleHeaderClick(header) {
    setSort({
      keyToSort: header.key,

      direction:
        header.key === sort.keyToSort
          ? sort.direction === 'asc'
            ? 'desc'
            : 'asc'
          : 'dsc',
    })

    setColumnId(header.id)
  }

  function getSortedArray(arrayToSort) {
    if (!(columnId == 4 || columnId == 3)) {
      if (sort.direction === 'asc') {
        return arrayToSort.sort((a, b) =>
          a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1,
        )
      }

      return arrayToSort.sort((a, b) =>
        a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1,
      )
    } else {
      if (sort.direction === 'asc') {
        return arrayToSort.sort((a, b) =>
          new Date(a[sort.keyToSort]) > new Date(b[sort.keyToSort]) ? 1 : -1,
        )
      }
      return arrayToSort.sort((a, b) =>
        new Date(a[sort.keyToSort]) > new Date(b[sort.keyToSort]) ? -1 : 1,
      )
    }
  }

  const exportToExcel = () => {
    const filtered = filter.map((obj) => {
      let links = ''
      const { file_name, ...rest } = obj

      // flatten..
      file_name.items.map((el) => {
        links = links + '  ' + el.url
        rest[el['file_name']] = links
      })

      return {
        ...rest,
      }
    })

    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(filtered)
    XLSX.utils.book_append_sheet(wb, ws, 'Solicitations')
    XLSX.writeFile(wb, 'WBSCM_Solicitations.xlsx')
  }

  useEffect(() => {
    const fetchData = async () => {
      let result = ''

      if (qSolicitation != null && qSolicitation.length > 0) {
        result = await fetch(serviceURL + '?solicitation=' + qSolicitation)
        // console.log(result.json);
      } else {
        result = await fetch(serviceURL)
      }

      result.json().then((data) => {
        if (qSolicitation != null && qSolicitation.length > 0) {
          /*
           
            const qFilter = data.filter((row) =>{
              
              
              if(row.sol_num.toString().toLowerCase().includes(qSolicitation.toString().toLowerCase()))
              {
    
                return true;
    
            
          
              }});
            */

          setFilter(data)
          setFiles(data)
          setColumn(Object.keys(data[0]))
        } else {
          //console.log(data);
          setColumn(Object.keys(data[0]))

          setFiles(data)

          setFilter(data)
        }
      })
    }
    fetchData()
  }, [serviceURL])

  async function handleCopySolURL() {
    let url = qHref

    await navigator.clipboard.writeText(url)

    setSolURLCopied(true)
  }

  function areEqualCaseInsensitive(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase()
  }

  const handleOfferDates = (selectedVal) => {}

  const handleAwardDates = (selectedVal) => {}

  const handleSolMethod = (selectedVal) => {}

  const handleProductCat = (selectedVal) => {}

  const handleDocumentCategory = (selectedVal) => {}

  const handlePubDates = (selectedVal) => {
    //setPubDateValue(selectedVal[0].value);

    if (
      areEqualCaseInsensitive(selectedVal[0].value, '1 Year') ||
      areEqualCaseInsensitive(selectedVal[0].value, 'Last 30 Days') ||
      areEqualCaseInsensitive(selectedVal[0].value, 'Last 60 Days') ||
      areEqualCaseInsensitive(selectedVal[0].value, 'Today')
    ) {
      filterByPubDate(selectedVal[0].value)
    } else {
      setFilter(files)
    }
  }

  function filterByPubDate(pubDateFilter) {
    let today = new Date()
    let toDate = formatDate(today)

    if (areEqualCaseInsensitive(pubDateFilter, 'Last 30 Days')) {
      today.setDate(today.getDate() - 30)
    } else if (areEqualCaseInsensitive(pubDateFilter, 'Last 60 Days')) {
      today.setDate(today.getDate() - 60)
    } else if (areEqualCaseInsensitive(pubDateFilter, 'Today')) {
      today.setDate(today.getDate())
    } else if (areEqualCaseInsensitive(pubDateFilter, '1 Year')) {
      today.setFullYear(today.getFullYear() - 1)
    }

    let fDate = formatDate(today)

    const filteredRows = files.filter((row) => {
      let rowDate = new Date(row.sol_updt_dt)
      let fromDate = new Date(fDate)

      if (rowDate > fromDate) {
        return true
      } else {
        return false
      }
    })
    setFilter(filteredRows)
  }

  function formatDate(inDate) {
    let mm = inDate.getMonth() + 1 // Months start at 0!
    let dd = inDate.getDate()
    let yyyy = inDate.getFullYear()

    if (dd < 10) dd = '0' + dd
    if (mm < 10) mm = '0' + mm

    const outDate = mm + '/' + dd + '/' + yyyy

    return outDate
  }

  const applyFilters = () => {
    for (const element of pubDateValue) {
    }
  }

  function performSearch(searchedVal) {
    const filteredRows = filter.filter((row) => {
      if (
        row.sol_num
          .toString()
          .toLowerCase()
          .includes(searchedVal.toString().toLowerCase())
      ) {
        return row.sol_num
          .toString()
          .toLowerCase()
          .includes(searchedVal.toString().toLowerCase())
      } else if (
        row.mat_grp
          .toString()
          .toLowerCase()
          .includes(searchedVal.toString().toLowerCase())
      ) {
        return row.mat_grp
          .toString()
          .toLowerCase()
          .includes(searchedVal.toString().toLowerCase())
      } else if (
        row.proc_id
          .toString()
          .toLowerCase()
          .includes(searchedVal.toString().toLowerCase())
      ) {
        return row.proc_id
          .toString()
          .toLowerCase()
          .includes(searchedVal.toString().toLowerCase())
      } else if (
        row.doc_cat
          .toString()
          .toLowerCase()
          .includes(searchedVal.toString().toLowerCase())
      ) {
        return row.doc_cat
          .toString()
          .toLowerCase()
          .includes(searchedVal.toString().toLowerCase())
      }
    })
    if (searchedVal.length < 1) {
      setFilter(files)
    } else {
      if (filteredRows.length == 0) {
        console.log('No search results : ' + filteredRows.length)

        //check with AWS
        setServiceURL(qHref + '/ppp?' + 'qSolNum=' + searchedVal)
      }

      setFilter(filteredRows)
    }
  }

  return (
    <div>
      <Header />

      <div className="grid-container">
        <fieldset className="usa-fieldset position-relative margin-top-neg-3">
          <div className="grid-row grid-gap-3 ">
            <div className="grid-col-3">
             <label className="usa-label" htmlFor="input-sol_num">Solicitation Number</label>
              <input
                className="usa-input"
                title="Solicitation Number"
                id="input-sol_num"
                name="input-sol_num"
                type="text"
                value={searchSolNum}
                onChange={(e) => setSearchSolNum(e.target.value)}
              />
            </div>
            <div className="grid-col-fill">
              <label className="usa-label" htmlFor="input-proc_id">Procurement Instrument Identifier (PIID)</label>
              <input
                className="usa-input"
                title="Procurement Instrument Identifier(PIID)"
                id="input-proc_id"
                name="input-proc_id"
                type="text"
                onChange={(e) => setSearchPID(e.target.value)}
              />
            </div>
            <div className="grid-col-3">
            <label className="usa-label" htmlFor="input-award_id">Award ID</label>
              <input
                className="usa-input"
                title="Award ID"
                id="input-award_id"
                name="input-award_id"
                type="text"
                onChange={(e) => setSearchAwardId(e.target.value)}
              />
            </div>

            
          </div>
          <div className="grid-row grid-gap-4 margin-top-neg-1">
            <div className="grid-col-3">
              <label className="usa-label" htmlFor="input-prod_cat">Product Category</label>
                <select
                  className="usa-select"
                  title="Product Category"
                  id="input-prod_cat"
                  name="input-prod_cat"
                  onChange={(e) => setSearchProductCategory(e.target.value)}
                  defaultValue={searchProductCategory}
                >
                  <option value="BAGS">BAGS</option>
                  <option value="Beef">Beef</option>
                  <option value="Bison">Bison</option>
                  <option value="Bulk Grain, Fats & Oils">Bulk Grain, Fats & Oils</option>
                  <option value="Cereal">Cereal</option>
                  <option value="Dairy Products">Dairy Products</option>
                  <option value="Egg Products">Egg Products</option>
                  <option value="Fish and Seafood">Fish and Seafood</option>
                  <option value="Flour">Flour</option>
                  <option value="Fruit">Fruit</option>
                  <option value="Grain & Oilseed Products">Grain & Oilseed Products</option>
                  <option value="Ham">Ham</option>
                  <option value="Lamb">Lamb</option>
                  <option value="Misc">Misc</option>
                  <option value="Nuts, Nut & Seed Butters">Nuts, Nut & Seed Butters</option>
                  <option value="Other Meat Products">Other Meat Products</option>
                  <option value="Pancakes">Pancakes</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Peas, Beans & Lentils">Peas, Beans & Lentils</option>
                  <option value="Pork">Pork</option>
                  <option value="Poultry">Poultry</option>
                  <option value="Service Contracts - Domestic">Service Contracts - Domestic</option>
                  <option value="Service Contracts - International">Meat</option>
                  <option value="Vegetables">Service Contracts - International</option>
                  <option value="Services Domestic">Services Domestic</option>
                  <option value="Services International">Services International</option>
                  <option value="Tortillas">Tortillas</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Vegetable Oil">Vegetable Oil</option>
                </select>
              </div>
              <div className="grid-col-3">
              <label className="usa-label" htmlFor="input-prod_name">Product Name</label>
                <input
                  className="usa-input"
                  title="Product Name"
                  id="input-prod_name"
                  name="input-prod_name"
                  type="text"
                  onChange={(e) => setSearchProductName(e.target.value)}
                  defaultValue={searchProductName}
                />
            </div>
            <div className="grid-col-3">
              <label className="usa-label" htmlFor="input-pub_dt">Publish Date</label>
                <select
                  className="usa-select"
                  title="Publish Date"
                  id="input-pub_dt"
                  name="input-pub_dt"
                  onChange={(e) => setSearchPublishDate(e.target.value)}
                  defaultValue={searchPublishDate}
                >
                  <option value="Any">Any</option>
                  <option value="Today">Today</option>
                  <option value="Last 30 days">Last 30 days</option>
                  <option value="Last 60 Days">Last 60 Days</option>
                  <option value="1 Year">1 Year</option>
                </select>
              </div>
              <div className="grid-col-3">
              <label className="usa-label" htmlFor="input-doc_cat">Document Type</label>
                <select
                  className="usa-select"
                  title="Document Type"
                  id="input-doc_cat"
                  name="input-doc_ca"
                  onChange={(e) => setSearchDocumentCategory(e.target.value)}
                  defaultValue={searchDocumentCategory}
                >
                  <option value="Solicitations">Solicitations</option>
                  <option value="Pre-Solicitation">Pre-Solicitation</option>
                  <option value="Specifications">Specifications</option>
                  <option value="Template">Template</option>
                  <option value="Supporting Documents">
                    Supporting Documents
                  </option>
                </select>
            </div>
            
    </div>
    <div className="grid-row grid-gap-1 margin-top-1">
            <div>
              <button
                className="usa-button"
                title="Search"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <div>
              <button
                className="usa-button"
                type="button"
                onClick={handleHideAdavanceOptions}>
                Advanced Search
              </button>
            </div>

            <div>
              <button
                className="usa-button"
                type="button"
                onClick={exportToExcel}
              >
                Export To Excel
              </button>
            </div>
            <div data-testid="checkbox" className="usa-checkbox">
           
              <input
                className="usa-checkbox__input"
                id="latest-version"
                type="checkbox"
                name="latest-sol"
                onChange={(e) => setSearchLatestVersion(e.target.checked)}
                  checked={searchLatestVersion}
              />
             <label className="usa-checkbox__label" htmlFor="latest-version">
                Latest Version
              </label>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="grid-container margin-top-2">
        <fieldset className="usa-fieldset" hidden={hideAdavanceOptions}>
          <legend className="usa-legend text-bold">
           <u> Advanced Search Options</u>
          </legend>
       
          <div className="grid-row grid-gap-1 margin-top-neg-2">

              <div id="perf_dt_outer" className="usa-date-picker usa-date-picker--initialized grid-col-auto" data-min-date="0000-01-01">
                  <label className="usa-label" htmlFor="perf-date-internal">Performance Period</label>
                  <input
                    className="usa-input usa-date-picker__internal-input"
                    id="perf-date-internal"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ display: 'none' }}


                  />
                  <div className="usa-date-picker__wrapper">
                    <input
                      className="usa-input usa-date-picker__external-input"
                      id="perf-date"
                      name="perf-date"
                      type="text"
                      onFocus={(e) => setSearchPerformanceDate(e.target.value)}
                    />
                    <button
                      type="button"
                      className="usa-date-picker__button"
                      aria-haspopup="true"
                      aria-label="Toggle calendar"
                    ></button>
                    <div
                      className="usa-date-picker__calendar"
                      role="application"
                      hidden={true}
                    ></div>
                    <div
                      className="usa-sr-only usa-date-picker__status"
                      role="status"
                      aria-live="polite"
                    ></div>
                  </div>
                </div>
                <div className="grid-col-fill">
                <label className="usa-label" htmlFor="input-offer_dt">Offer Date</label>
                  <select
                    className="usa-select"
                    title="Offer Date"
                    id="input-offer_dt"
                    name="input-Offer_dt"
                    onChange={(e) => setSearchOfferDate(e.target.value)}
                    defaultValue={searchOfferDate}
                  >
                    <option value="Any">Any</option>
                    <option value="Today">Today</option>
                    <option value="Last 30 days">Next 30 days</option>
                    <option value="Last 60 Days">Last 30 Days</option>
                    <option value="1 Year">Last 1 Year</option>
                  </select>
                </div>
                <div className="grid-col-fill">
                <label className="usa-label" htmlFor="input-award_dt">Award Date</label>
                  <select
                    className="usa-select"
                    title="Award Date"
                    id="input-award_dt"
                    name="input-award_dt"
                    onChange={(e) => setSearchAwardDate(e.target.value)}
                    defaultValue={searchAwardDate}
                  >
                    <option value="Any">Any</option>
                    <option value="Today">Today</option>
                    <option value="Last 30 days">30 days</option>
                    <option value="Last 60 Days">60 Days</option>
                    <option value="1 Year">1 Year</option>
                  </select>
                </div>
                <div className="grid-col-fill">
                <label className="usa-label" htmlFor="input-sol_method">Solicitation Method</label>
                  <select
                    className="usa-select"
                    title="Solicitation Method"
                    id="input-sol_method"
                    name="input-sol_method"
                    onChange={(e) => setSearchSolMethod(e.target.value)}
                    defaultValue={searchSolMethod}
                  >
                    <option value="IFB">IFB</option>
                    <option value="RFP">RFP</option>
                    <option value="RFQ">RFQ</option>
                  </select>
                </div>
                
          </div>
          <div className="grid-row grid-gap-1 margin-top-neg-2">
          <div className="grid-col-4">
            <label className="usa-label" htmlFor="input-pkg_num">Package Number</label>
              <input
                className="usa-input"
                title="Package Number"
                id="input-pkg_num"
                name="input-pkg_num"
                type="text"
                onChange={(e) => setSearchPackageNum(e.target.value)}
                defaultValue={searchPackageNum}
              />
            </div>

            <div className="grid-col-4">
            <label className="usa-label" htmlFor="input-pur_grp">Purchasing Group</label>
              <select
                className="usa-select"
                title="Purchasing Group"
                id="input-pur_grp"
                name="input-pur_grp"
                onChange={(e) => setSearchPurchaseGroup(e.target.value)}
                defaultValue={searchPurchaseGroup}
              >
                <option value="pur_grp_1">Purchase Group 1</option>
                <option value="pur_grp_1">Purchase Group 2</option>
              </select>
            </div>
            <div data-testid="checkbox" className="usa-checkbox margin-top-6 grid-col-4">
              
                  <input
                    className="usa-checkbox__input"
                    id="active_sol"
                    type="checkbox"
                    name="latest-sol"
                    title="Active Solicitation"
                    onChange={(e) => setSearchActiveSol(e.target.checked)}
                    checked={searchActiveSol}
                  />
                   <label className="usa-checkbox__label" htmlFor="active_sol"> Active Solicitation </label>
                </div>
          </div>
        </fieldset>

        <div>
          <div>
          
              <table className="usa-table usa-table--striped usa-table--borderless">
                <thead>
                  <tr>
                    {headers.map((header, index) => (
                      <th
                        scope="col"
                        title={header.label}
                        key={index}
                        onClick={() => handleHeaderClick(header)}
                      >
                        <div>
                          <span>{header.label}</span>
                          {header.key === sort.keyToSort && header.id !== 7 && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 24 24"
                              width="1em"
                              className="usa-icon usa-icon--size-2"
                              focusable="false"
                              role="img"
                            >
                              <path d="M15.17 15 13 17.17V6.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 11 6.83v10.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15z"></path>
                            </svg>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {getSortedArray(filter).map((file, i) => (
                    <tr key={i}>
                      <td>
                        <div className="display-inline-flex">
                          <a
                            title={file.sol_num}
                            href={
                              url.origin + '/ppp?solicitation=' + file.sol_num
                            }
                          >
                            {file.sol_num}
                          </a>
                          <img
                            title="Copy Solicitation Link"
                            onClick={async () => {
                              let url1 =
                                url.origin + '/ppp?solicitation=' + file.sol_num
                              await navigator.clipboard.writeText(url1)
                            }}
                            className="margin-05"
                            src="/ppp/img/usa-icons/content_copy.svg"
                            alt="Copy Solicitation Link"
                            width="15px"
                            height="15px"
                          />
                        </div>{' '}
                      </td>
                      <td title={file.proc_id}>{file.proc_id}</td>
                      <td title={file.offer_dt}>{file.offer_dt}</td>
                      <td title={file.sol_updt_dt}>{file.sol_updt_dt}</td>
                      <td title={file.mat_grp}>{file.mat_grp}</td>
                      <td title={file.doc_cat}>{file.doc_cat}</td>

                      <td title="Document Links">
                        <a
                          className="usa-button"
                          aria-controls="documents-modal"
                          data-open-modal
                          role="button"
                          id="documents-modal-button"
                          onClick={() => {
                            let a = file.file_name.items
                            setLinks(a)
                            setSolURL(file.sol_num)
                            setSolURLCopied(false)
                            const elem =
                              document.getElementById('documents-modal')
                            elem.className = 'usa-modal-wrapper'
                          }}
                        >
                          {' '}
                          Document Links
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
           
          </div>
        </div>
      </div>

      <Footer />

      <div
        className="usa-modal-wrapper is-hidden"
        role="dialog"
        id="documents-modal"
        aria-labelledby="documents-modal-heading"
        aria-describedby="documents-modal-description"
        data-opener="documents-modal-button"
      >
        <div className="usa-modal-overlay" aria-controls="documents-modal">
          <div className="usa-modal usa-modal--lg" tabIndex="-1">
            <div className="usa-modal__content">
              <div className="usa-modal__main">
                <h2 className="usa-modal__heading" id="documents-modal-heading">
                  <a
                    id="are-you-sure-you-want-to-continue-2"
                    className="usa-anchor"
                  ></a>
                  Solication {solURL} Documents
                </h2>
                <div className="usa-prose">
                  <ul
                    id="documents-modal-description"
                    className="usa-list usa-list--unstyled"
                  >
                    {links.map((link) => (
                      <li key={link.name}>
                        <img
                          title="Copy Document Link"
                          onClick={async () => {
                            await navigator.clipboard.writeText(link.url)
                          }}
                          className="margin-05"
                          src="/ppp/img/usa-icons/content_copy.svg"
                          alt="Copy Solicitation Link"
                          width="15px"
                          height="15px"
                        />
                        <a target="_blank" href={link.url}>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="usa-modal__footer">
                  <ul className="usa-button-group">
                    <li className="usa-button-group__item">
                      <button
                        type="button"
                        className="usa-button"
                        data-close-modal=""
                        onClick={handleCopySolURL}
                      >
                        {!solURLCopied ? 'Copy Solicitation Link' : 'Copied!'}
                      </button>
                    </li>
                    <li className="usa-button-group__item">
                      <button
                        type="button"
                        className="usa-button usa-button--unstyled padding-105 text-center"
                        data-close-modal
                        onClick={() => {
                          const elem =
                            document.getElementById('documents-modal')
                          elem.className = 'usa-modal-wrapper is-hidden'
                        }}
                      >
                        Go back
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
