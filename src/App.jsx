import { useState, useEffect } from 'react'
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

export default function App() {
  //test 2
  const { url } = useLoaderData();
  // console.log(url);
  const qHref = url.href
  let qHrefDefault = ''
  if (qHref.includes('localhost') || qHref.includes('amazonaws')) {

    qHrefDefault =
      'https://1gc4yepshk.execute-api.us-east-1.amazonaws.com/devdsl/lambda' + url.search;
  }
  else {
    qHrefDefault = url.origin + '/ppp/search' + url.search;
  }

  const [serviceURL, setServiceURL] = useState(qHrefDefault)

  const [searchSolNum, setSearchSolNum] = useState('')
  const [searchPID, setSearchPID] = useState('')
  const [searchAwardId, setSearchAwardId] = useState('')
  const [searchActiveSol, setSearchActiveSol] = useState(true)
  const [searchAwardDate, setSearchAwardDate] = useState('Any')
  const [searchDocumentCategory, setSearchDocumentCategory] = useState('Solicitation')
  const [searchOfferDate, setSearchOfferDate] = useState('Any')
  const [searchPackageNum, setSearchPackageNum] = useState('')
  const [searchProductCategory, setSearchProductCategory] = useState('Any')
  const [searchProductName, setSearchProductName] = useState('')
  const [searchPublishDate, setSearchPublishDate] = useState('Any')
  const [searchPurchaseGroup, setSearchPurchaseGroup] = useState('Any')
  const [searchSolMethod, setSearchSolMethod] = useState('IFB')
  const [searchLatestVersion, setSearchLatestVersion] = useState(true)
  const [searchPerformanceDate, setSearchPerformanceDate] = useState('')
  const [files, setFiles] = useState([])
  const [links, setLinks] = useState([])
  const [selectedSol, setSelectedSol] = useState()
  const [selectedSolCopied, setSelectedSolCopied] = useState(false)
  const [hideAdavanceOptions, setHideAdavanceOptions] = useState(true)

  function handleSearch() {

    //console.log("qHrefDefault = " + qHrefDefault);
    if (qHref.includes('localhost') || qHref.includes('amazonaws')) {

      qHrefDefault =
        'https://1gc4yepshk.execute-api.us-east-1.amazonaws.com/devdsl/lambda'
    }
    else {
      qHrefDefault = url.origin + '/ppp/search'
    }



    let qServiceURL = null;
    
    /*
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
    );*/

    qServiceURL = qHrefDefault + "?";
    if (searchSolNum != null && searchSolNum.length > 0) {
      qServiceURL = qServiceURL + 'solNo=' + searchSolNum;
    }
    if (searchPID != null && searchPID.length > 0) {
      qServiceURL = qServiceURL + '&pii=' + searchPID
    }
    if (searchActiveSol != null) {
      if(searchAwardId != null && searchAwardId.length > 0)
      {
        qServiceURL = qServiceURL + '&active=0'
        setSearchActiveSol(false);
      }else
      {
        qServiceURL = qServiceURL + '&active=' + searchActiveSol
      }
      
    }
    if (searchAwardId != null && searchAwardId.length > 0) {
      qServiceURL = qServiceURL + '&awdId=' + searchAwardId
    
    }
   
    if (searchAwardDate != null && searchAwardDate.length > 0) {

      if(searchAwardDate.toUpperCase() === "ANY")
        {
          qServiceURL = qServiceURL + '&awdDt=' + searchAwardDate
  
        }else {
          
          qServiceURL = qServiceURL + '&awdDt=' + getDate(searchAwardDate)
        }
      
    }
    if (searchDocumentCategory != null && searchDocumentCategory.length > 0) {
      qServiceURL = qServiceURL + '&docCat=' + searchDocumentCategory
    }
    if (searchOfferDate != null && searchOfferDate.length > 0) {

      if(searchOfferDate.toUpperCase() === "ANY")
        {
          qServiceURL = qServiceURL + '&offDt=' + searchOfferDate
  
        }else {
          
          qServiceURL = qServiceURL + '&offDt=' + getDate(searchOfferDate);
        }
     
    }
    if (searchPackageNum != null && searchPackageNum.length > 0) {
      qServiceURL = qServiceURL + '&pkgNo=' + searchPackageNum
    }
    if (searchProductCategory != null && searchProductCategory.length > 0 && searchProductCategory.toUpperCase() != "ANY") {
      qServiceURL = qServiceURL + '&prodCat=' + searchProductCategory
    }
    if (searchProductName != null && searchProductName.length > 0) {
      qServiceURL = qServiceURL + '&prodName=' + searchProductName
    }
    if (searchPublishDate != null && searchPublishDate.length > 0) {

      if(searchPublishDate.toUpperCase() === "ANY")
      {
        qServiceURL = qServiceURL + '&pubDt=' + searchPublishDate

      }else {
        
        qServiceURL = qServiceURL + '&pubDt=' + getDate(searchPublishDate);
      }
      
    }
    if (searchPurchaseGroup != null && searchPurchaseGroup.length > 0 && searchPurchaseGroup.toUpperCase() != "ANY") {
      qServiceURL = qServiceURL + '&purGrp=' + searchPurchaseGroup
    } if (searchSolMethod != null && searchSolMethod.length > 0) {
      qServiceURL = qServiceURL + '&solMed=' + searchSolMethod
    }
    if (searchLatestVersion != null) {
      qServiceURL = qServiceURL + '&latest=' + searchLatestVersion
    }
    if (searchPerformanceDate != null && searchPerformanceDate.length > 0) {
      qServiceURL = qServiceURL + '&perfDt=' + searchPerformanceDate
    }


    //console.log(qServiceURL);
    setServiceURL(qServiceURL);

  }

  function getDate(range)
  {
    //console.log("Range = " + range);
    let today = new Date();

    
    if(range.toUpperCase() === ("LAST 30 DAYS"))
      {
        
        today.setDate(today.getDate() - 29);
       
      }
      if(range.toUpperCase() === ("NEXT 30 DAYS"))
        {
          
          today.setDate(today.getDate() + 29);
         
        }
    
      if(range.toUpperCase() === "LAST 60 DAYS")
        {
          today.setDate(today.getDate() - 59);
        }
    
        if(range.toUpperCase() === "1 YEAR")
          {
            today.setFullYear(today.getFullYear()  - 1);
          }
          
          let mm = String(today.getMonth() + 1 ).padStart(2, '0');
          let dd = String(today.getDate()).padStart(2, '0');
          let yyyy = today.getFullYear();
      
          
          const formattedDate = mm +"/"+dd+"/"+yyyy;
          //console.log(formattedDate);
          return formattedDate;
  }


  function handleHideAdavanceOptions() {
    if (hideAdavanceOptions) {
      setHideAdavanceOptions(false)
    } else {
      setHideAdavanceOptions(true)
    }
  }

  function getTimeValue(dtStr)
  {
    let dt = new Date(dtStr);
    dt.setHours(0, 0, 0, 0);
   
    return  dt.getTime()
  }

  const exportToExcel = () => {
    const filtered = files.map((obj) => {
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

    if(serviceURL.includes("?"))
    {
      if(! serviceURL.includes("latest"))
        {
          setSearchLatestVersion(false);
        }
        if(! serviceURL.includes("active"))
        {
          setSearchActiveSol(false);
        }

    }
  
    const fetchData = async () => {
      let result = await fetch(serviceURL)

      result.json().then((data) => {
        setFiles(data)
      })
    }
    fetchData()
  }, [serviceURL])

  async function handleCopySolURL() {

    await navigator.clipboard.writeText(url.origin + '/ppp?solNo=' + selectedSol + "&docCat=SOLICITATION");

    setSelectedSolCopied(true)
  }


  return (
    <div>
      <Header />

      <div className="grid-container">
        <fieldset className="usa-fieldset position-relative margin-top-neg-3">
          <div className="grid-row grid-gap-1">
            <div className="grid-col-auto">
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
            <div className="grid-col-auto">
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
            <div className="grid-col-auto">
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

            <div className="grid-col">
              <label className="usa-label" htmlFor="input-pur_grp">Purchasing Group</label>
              <select
                className="usa-select"
                title="Purchasing Group"
                id="input-pur_grp"
                name="input-pur_grp"
                onChange={(e) => setSearchPurchaseGroup(e.target.value)}
                defaultValue={searchPurchaseGroup}
              >
                 <option value="Any">Any</option>
                <option value="AMS-Dairy">AMS-Dairy</option>
                <option value="AMS-Domestic">AMS-Domestic</option>
                <option value="AMS-Fa Comm Proc">AMS-Fa Comm Proc</option>
                <option value="AMS-Fruit & Veg">AMS-Fruit & Veg</option>
                <option value="AMS-Intl Bulk">AMS-Intl Bulk</option>
                <option value="AMS-Intl General">AMS-Intl General</option>
                <option value="AMS-Intl Packaged">AMS-Intl Packaged</option>
                <option value="AMS-Intl Pkgng Mtl">AMS-Intl Pkgng Mtl</option>
                <option value="AMS-Intl Services">AMS-Intl Services</option>
                <option value="AMS-Livestock">AMS-Livestock</option>

                <option value="AMS-Poultry">AMS-Poultry</option>
                <option value="CCC-Commodity">CCC-Commodity</option>
                <option value="CCC-Admin">CCC-Admin</option>
                <option value="FNS-Cmd">FNS-Cmd</option>
                <option value="FNS-Fa Publ Vouch">FNS-Fa Publ Vouch</option>

                <option value="FNS-Group">FNS-Group</option>
                <option value="Freight Aid">Freight Aid</option>
                <option value="Freight Domestic">Freight Domestic</option>
                <option value="Freight FAS">Freight FAS</option>

              </select>
            </div>

          </div>
          <div className="grid-row grid-gap-1 margin-top-neg-1">
            <div className="grid-col-auto">
              <label className="usa-label" htmlFor="input-prod_cat">Product Category</label>
              <select
                className="usa-select"
                title="Product Category"
                id="input-prod_cat"
                name="input-prod_cat"
                onChange={(e) => setSearchProductCategory(e.target.value)}
                defaultValue={searchProductCategory}
              >
                <option value="Any">Any</option>
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
                <option value="Grain & Oilseed Products">Grain & Oilseed Products</option>
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
                <option value="Service Contracts - International">Service Contracts - International</option>
                <option value="Services Domestic">Services Domestic</option>
                <option value="Services International">Services International</option>
                <option value="Tortillas">Tortillas</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Vegetable Oil">Vegetable Oil</option>
              </select>
            </div>
            <div className="grid-col-auto">
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
            <div className="grid-col-auto">
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
            <div className="grid-col">
              <label className="usa-label" htmlFor="input-doc_cat">Document Type</label>
              <select
                className="usa-select"
                title="Document Type"
                id="input-doc_cat"
                name="input-doc_ca"
                onChange={(e) => setSearchDocumentCategory(e.target.value)}
                defaultValue={searchDocumentCategory}
              >
                <option value="Solicitation">Solicitation</option>
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

            <div className="grid-col-auto">
              <button
                className="usa-button"
                title="Search"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <div className="grid-col-auto">
              <button
                className="usa-button"
                type="button"
                onClick={exportToExcel}
              >
                Export To Excel
              </button>
            </div>
            <div className="grid-col-auto margin-right-15">
              <button
                className="usa-button"
                type="button"
                onClick={handleHideAdavanceOptions}>
                Advanced Search
              </button>
            </div>
            <div data-testid="checkbox" className="usa-checkbox grid-col-auto margin-left-10">

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

            <div data-testid="checkbox" className="usa-checkbox grid-col-auto">

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
      </div>

      <div className="grid-container  margin-top-2">
        <fieldset className="usa-fieldset" hidden={hideAdavanceOptions}>
          <legend className="usa-legend text-bold">
            <u> Advanced Search Options</u>
          </legend>

          <div className="grid-row grid-gap-05 margin-top-neg-2">

            <div id="perf_dt_outer" className="usa-date-picker usa-date-picker--initialized grid-col-auto" data-min-date="0000-01-01">
              <label className="usa-label" htmlFor="perf-date-internal">Period of Performance</label>
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
                  onChange={(e) => setSearchPerformanceDate(e.target.value)}
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
            <div className="grid-col-auto">
              <label className="usa-label" htmlFor="input-offer_dt">Offers Due Date</label>
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
                <option value="Next 30 days">Next 30 days</option>
                <option value="Last 60 Days">Last 30 Days</option>
                <option value="1 Year">Last 1 Year</option>
              </select>
            </div>
            <div className="grid-col-auto">
              <label className="usa-label" htmlFor="input-award_dt">Award Announcement Date</label>
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
                <option value="Last 30 days">Last 30 days</option>
                <option value="Last 60 Days">Last 60 Days</option>
                <option value="1 Year">Last 1 Year</option>
              </select>
            </div>
            <div className="grid-col-auto">
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
            <div className="grid-col-auto">
              <label className="usa-label" htmlFor="input-pkg_num">Package Solicitation Number</label>
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

          </div>
          <div className="grid-row grid-gap-1 margin-top-neg-2">



          </div>
        </fieldset>

        <div className="usa-table usa-table--striped usa-table--borderless usa-table--sticky-header" tabIndex="0">
          <table className="usa-table">
            <thead>
              <tr>
                <th title='WBSCM Solicitation Number' data-sortable scope="col" role="columnheader" aria-sort="descending" >WBSCM Solicitation Number
                  <button tabIndex="0" className="usa-table__header__button" title="Click to sort by Alphabetical in ascending order.">
                    <svg className="usa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g className="descending" fill="transparent">
                        <path d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z"></path>
                      </g>
                      <g className="ascending" fill="transparent">
                        <path transform="rotate(180, 12, 12)" d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z"></path>
                      </g>
                      <g className="unsorted" fill="transparent">
                        <polygon points="15.17 15 13 17.17 13 6.83 15.17 9 16.58 7.59 12 3 7.41 7.59 8.83 9 11 6.83 11 17.17 8.83 15 7.42 16.41 12 21 16.59 16.41 15.17 15"></polygon>
                      </g>
                    </svg>
                  </button>
                </th>
                <th title="Procurement Instrument Identifier" data-sortable scope="col" role="columnheader">
                  Procurement Instrument Identifier
                  <button tabIndex="0" className="usa-table__header__button" title="Click to sort by Alphabetical in ascending order.">
                    <svg className="usa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g className="descending" fill="transparent">
                        <path d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z"></path>
                      </g>
                      <g className="ascending" fill="transparent">
                        <path transform="rotate(180, 12, 12)" d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z"></path>
                      </g>
                      <g className="unsorted" fill="transparent">
                        <polygon points="15.17 15 13 17.17 13 6.83 15.17 9 16.58 7.59 12 3 7.41 7.59 8.83 9 11 6.83 11 17.17 8.83 15 7.42 16.41 12 21 16.59 16.41 15.17 15"></polygon>
                      </g>
                    </svg>
                  </button>
                </th>
                <th title="Offer Due Date" data-sortable scope="col" role="columnheader">
                  Offer Due Date
                  <button tabIndex="0" className="usa-table__header__button" title="Click to sort by Alphabetical in ascending order.">
                    <svg className="usa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g className="descending" fill="transparent">
                        <path d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z"></path>
                      </g>
                      <g className="ascending" fill="transparent">
                        <path transform="rotate(180, 12, 12)" d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z"></path>
                      </g>
                      <g className="unsorted" fill="transparent">
                        <polygon points="15.17 15 13 17.17 13 6.83 15.17 9 16.58 7.59 12 3 7.41 7.59 8.83 9 11 6.83 11 17.17 8.83 15 7.42 16.41 12 21 16.59 16.41 15.17 15"></polygon>
                      </g>
                    </svg>
                  </button>
                </th>
                <th title="Amendment Date" data-sortable scope="col" role="columnheader">
                  Amendment Date
                  <button tabIndex="0" className="usa-table__header__button" title="Click to sort by Alphabetical in ascending order.">
                    <svg className="usa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g className="descending" fill="transparent">
                        <path d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z"></path>
                      </g>
                      <g className="ascending" fill="transparent">
                        <path transform="rotate(180, 12, 12)" d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z"></path>
                      </g>
                      <g className="unsorted" fill="transparent">
                        <polygon points="15.17 15 13 17.17 13 6.83 15.17 9 16.58 7.59 12 3 7.41 7.59 8.83 9 11 6.83 11 17.17 8.83 15 7.42 16.41 12 21 16.59 16.41 15.17 15"></polygon>
                      </g>
                    </svg>
                  </button>
                </th>
                <th title="Product Category" scope="col" role="columnheader">
                  Product Category
                </th>
                <th title="Document Type" scope="col" role="columnheader">
                  Document Type
                </th>
                <th title="Solicitation Documents" scope="col" role="columnheader">
                  Solicitation Documents
                </th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, i) => (
                <tr key={i}>
                  <th scope="row" data-sort-value={file.solNo}>
                    <div className="display-inline-flex">
                      <a
                        title={file.solNo}
                        href={url.origin + '/ppp?solNo=' + file.solNo + "&docCat=SOLICITATION"}


                      >
                        {file.solNo}
                      </a>
                      <img  
                        title="Copy Solicitation Link"
                        onClick={async () => {
                          let url1 =
                            url.origin + '/ppp?solNo=' + file.solNo+ "&docCat=SOLICITATION"
                          await navigator.clipboard.writeText(url1)

                        }}
                        className="margin-05 usa-tooltip"
                        src="/ppp/img/usa-icons/content_copy.svg"
                        alt="Copy Solicitation Link"
                        width="15px"
                        height="15px"
                      />
                    </div>
                  </th>
                  <td data-sort-value={file.pii}>{file.pii}</td>
                  <td data-sort-value={getTimeValue(file.offDt)}>{file.offDt}</td>
                  <td data-sort-value={getTimeValue(file.amdDt)}>{file.amdDt}</td>
                  <td data-sort-value={file.prodGrp}>{file.prodGrp}</td>
                  <td data-sort-value={file.docCat}>{file.docCat}</td>

                  <td title="Document Links">
                    <a
                      className="usa-button"
                      aria-controls="documents-modal"
                      data-open-modal
                      role="button"
                      id="documents-modal-button"
                      onClick={() => {

                        let a = file.docLinks.items
                        setLinks(a)
                        setSelectedSol(file.solNo)
                        setSelectedSolCopied(false)
                        document.getElementById('documents-modal').className = 'usa-modal-wrapper';
                      }}
                    >
                      Document Links
                    </a>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
          <div className="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>
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
                  Solication {selectedSol} Documents
                </h2>
                <div className="usa-prose">

                  <table className="usa-table usa-table--borderless">
                    <thead>
                      <tr>
                        <th scope="col">Copy URL</th>
                        <th scope="col">Document Link</th>
                        <th scope="col">Document Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {links.map((link, i) => (
                        <tr key={i}>

                          <td> <img
                            title="Copy Document Link"
                            onClick={async () => {
                              await navigator.clipboard.writeText(link.url)
                            }}
                            className="margin-05"
                            src="/ppp/img/usa-icons/content_copy.svg"
                            alt="Copy Solicitation Link"
                            width="15px"
                            height="15px"
                          /></td>
                          <td><a target="_blank" href={link.url}>
                            {link.name}
                          </a></td>
                          <td>{link.docType}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>


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
                        {!selectedSolCopied ? 'Copy Solicitation Link' : 'Copied!'}
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
