import { useState, useEffect, useRef} from 'react'
import "./index.css";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import * as XLSX from "xlsx";
import {
  useLoaderData,
} from "react-router-dom";

import { 
  Banner, BannerHeader, Accordion, Link,Checkbox, ComboBox, Header, Title,NavMenuButton, ExtendedNav, 
  GovBanner,SummaryBox,SummaryBoxHeading,SummaryBoxContent,Search,FormGroup, Form, Label,DatePicker,TextInput, 
  GridContainer, Grid, Footer, FooterNav, Address, Logo, Table, PrimaryNav, IdentifierLogo, Modal, Button, ModalToggleButton, Icon, IconList, IconListContent, IconListItem, IconListIcon, Select, Fieldset, ModalOpenLink, Tooltip
} from "@trussworks/react-uswds";

export async function loader({request})
{
  const url = new URL(request.url);
  const qSolicitation = url.searchParams.get("solicitation");

  return {qSolicitation};
}


export default function App() {

  const { qSolicitation } = useLoaderData();


  
  const serviceURL = "https://g0afk1o10c.execute-api.us-east-1.amazonaws.com/dev?mode=db";

  const [column, setColumn] = useState([]);
  const [files, setFiles] = useState([]);

  const [filter, setFilter] = useState([])

  const [links, setLinks] = useState([])
  const [solURL, setSolURL] = useState()
  const [solURLCopied, setSolURLCopied] = useState(false);
  

  const modalRef = useRef(null);

  const[sort, setSort] = useState({keyToSort:"sol_num", direction: "asc"});

  const[columnId, setColumnId] = useState(1);

  const[pubDateValue, setPubDateValue] = useState("Last 60 Days");

  const[hideAdavanceOptions, setHideAdavanceOptions] = useState(true)

  const[docCategory, setDocCategory] = useState("Solicitations");
  


  

  const headers = [
    {
      id: 1,
      label: "Solicitation Number",
      key:"sol_num"
    },
    {
      id: 2,
      label: "Procurement Instrument Identifier",
      key:"proc_id"
    },
    {
      id: 3,
      label: "Current Date Offers Are Due",
      key:"offer_dt"
    },
    {
      id: 4,
      label: "Updated Date",
      key:"sol_updt_dt"
    },
    {
      id: 5,
      label: "Material Group",
      key:"mat_grp"
    },
    {
      id: 6,
      label: "Document Category",
      key:"doc_cat"
    },
    {
      id: 7,
      label: "Solicitation Documents",
      key:"doc"
    }];

   

    function handleHideAdavanceOptions()
    {
        if(hideAdavanceOptions)
        {
          setHideAdavanceOptions(false);
        }else{
          setHideAdavanceOptions(true);
        }
    }

  function handleHeaderClick(header)
  {
    setSort({
      keyToSort: header.key,
    
      direction: header.key === sort.keyToSort ? sort.direction === 'asc' ? 'desc' : 'asc' :'dsc'})

      setColumnId(header.id);

    
  }

  function getSortedArray(arrayToSort)
  {
   
    if(!(columnId == 4 || columnId == 3))
    {
  
    
      if (sort.direction === 'asc' )
      {
        return arrayToSort.sort((a,b) => (a[sort.keyToSort] > b[sort.keyToSort] ? 1: -1))
      }

      return arrayToSort.sort((a,b) => (a[sort.keyToSort] > b[sort.keyToSort] ? -1: 1))
  }else{
        if (sort.direction === 'asc' )
        {

          return arrayToSort.sort((a,b) => (new Date(a[sort.keyToSort]) > new Date(b[sort.keyToSort]) ? 1: -1))
        }
        return arrayToSort.sort((a,b) => (new Date(a[sort.keyToSort]) > new Date(b[sort.keyToSort]) ? -1: 1))
  }
}

  const exportToExcel = () => 
  {
   
    const filtered = filter.map(obj => {
    
      let links = "";
    const {
      file_name,
      ...rest
  } = obj;

  // flatten..
  file_name.items.map(el => {

    
      links = links + "  " + el.url;
      rest[el['file_name']] = links;
  });


  return {...rest,   
  };
});

  


    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(filtered);
    XLSX.utils.book_append_sheet(wb,ws,"Solicitations");
    XLSX.writeFile(wb, 'WBSCM_Solicitations.xlsx');

  }
  
  useEffect(() => {

    const fetchData = async() => {

      const result = await fetch(serviceURL);
      result.json().then(data => {
        
        if(qSolicitation != null && qSolicitation.length > 0)
    {
   
       
        const qFilter = data.filter((row) =>{
          
          
          if(row.sol_num.toString().toLowerCase().includes(qSolicitation.toString().toLowerCase()))
          {

            return true;

        
      
          }});


        setFilter(qFilter);
        setFiles(qFilter);
        setColumn(Object.keys(data[0]));
    }else{

       //console.log(data);
       setColumn(Object.keys(data[0]));

       setFiles(data);
       setFilter(data);



    }
        
       

      
      });

      
      

    }
    fetchData();

    

  
  }, [])

  const testContent = "Here";
  const logoImg = "https://www.usda.gov/themes/usda/img/usda-symbol.svg";
  function returnToTop() {};

  function handleSearch() {};

  async function handleCopySolURL()
  {
    let url  = "https://wbscm-ppp.simlix.org/?solicitation="+solURL;
    

    await navigator.clipboard.writeText(url);

    setSolURLCopied(true);

  }

  const datesOptions = {"Today":"Today", "Last 30 days":"Last 30 days", "Last 60 Days":"Last 60 Days", "1 Year":"1 Year", "Any":"Any"};
  const dateOptionsList = Object.entries(datesOptions).map(([key, value]) => ({
    value: key,
    label: value
  }));
  const documentCatsOptions = {"Solicitations":"Solicitations", "Pre-Solicitations":"Specifications", "Template":"Template",
                              "Supporting Documents":"Supporting Documents"};
  const docCatList = Object.entries(documentCatsOptions).map(([key, value]) => ({
                                value: key,
                                label: value
                              }));
                
const methodOptions = {"IFB":"IFB", "Pre-RFP":"Pre-RFP", "RFQ":"RFQ"};
const methodOptionsList = Object.entries(methodOptions).map(([key, value]) => ({
  value: key,
  label: value
}));                         

                            

 

  const publishDates = Object.entries(datesOptions).map(([value, key]) => ({
    value: value,
    label: key
  }));

  const offerDates = Object.entries(datesOptions).map(([value, key]) => ({
    value: value,
    label: key
  }));

  const awardDates = Object.entries(datesOptions).map(([value, key]) => ({
    value: value,
    label: key
  }));

  const documentCats = Object.entries(documentCatsOptions).map(([value, key]) => ({
    value: value,
    label: key
  }));

  const solicitationMethods = Object.entries(methodOptions).map(([value, key]) => ({
    value: value,
    label: key
  }));

  function areEqualCaseInsensitive(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
  }

  const handleOfferDates = (selectedVal) =>
  {}

  const handleAwardDates = (selectedVal) =>
  {}

  const handleSolMethod = (selectedVal) =>
  {}

  const handleProductCat = (selectedVal) =>
  {}

  const handleDocumentCategory = (selectedVal) =>
  {}


  

  

  

  const handlePubDates = (selectedVal) =>
  {
   
 
    //setPubDateValue(selectedVal[0].value);

    if(areEqualCaseInsensitive(selectedVal[0].value, "1 Year") || 
    areEqualCaseInsensitive(selectedVal[0].value, "Last 30 Days") ||
    areEqualCaseInsensitive(selectedVal[0].value, "Last 60 Days") ||
    (areEqualCaseInsensitive(selectedVal[0].value, "Today")))
    {
      filterByPubDate(selectedVal[0].value);
    }else
    {
      setFilter(files);
    }

   
  }

  function filterByPubDate(pubDateFilter)
  {
    let today = new Date();
    let toDate = formatDate(today);

      if(areEqualCaseInsensitive((pubDateFilter), "Last 30 Days"))
    {
   
      today.setDate(today.getDate() - 30);

    }else if(areEqualCaseInsensitive((pubDateFilter), "Last 60 Days"))
    {
  
      today.setDate(today.getDate() - 60);

    }else if(areEqualCaseInsensitive((pubDateFilter), "Today"))
    {
      
      today.setDate(today.getDate());

    }else if(areEqualCaseInsensitive((pubDateFilter), "1 Year"))
    {
  
      today.setFullYear(today.getFullYear() - 1);
    }
      
      let fDate = formatDate(today);

 
     
      const filteredRows = files.filter((row) => {

        let rowDate = new Date(row.sol_updt_dt);
        let fromDate = new Date(fDate);

        if (rowDate > fromDate){
          return true;
        }else {
          return false;
        }
      })
      setFilter(filteredRows);

  }

  function formatDate(inDate)
  {
    let mm = inDate.getMonth() + 1; // Months start at 0!
    let dd = inDate.getDate();
    let yyyy = inDate.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const outDate = mm + '/' + dd + '/' + yyyy;

    return outDate;
  }

  const applyFilters = ()=>{

    for (const element of pubDateValue) {
   
   }

  }

  const requestSearch = (searchedVal) => {

   
    const filteredRows = filter.filter((row) => {

     

      if( row.sol_num.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) )
      {
      
        return row.sol_num.toString().toLowerCase().includes(searchedVal.toString().toLowerCase());

      }else if(row.mat_grp.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) ){
       
        return row.mat_grp.toString().toLowerCase().includes(searchedVal.toString().toLowerCase());
      }
      else if(row.proc_id.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) ){
      
        return row.proc_id.toString().toLowerCase().includes(searchedVal.toString().toLowerCase());
      }
      else if(row.doc_cat.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) ){
       
        return row.doc_cat.toString().toLowerCase().includes(searchedVal.toString().toLowerCase());
      }
    
     
    });
    if (searchedVal.length < 1) {
     
        setFilter(files)
    }
    else {
     
      
        setFilter(filteredRows);
     
     
    }
  };

  return (
 
    <div>
      <div>
        <Grid  row>
          <Grid col="fill"><GovBanner /></Grid>
        </Grid>
        <Grid  row >
        <Grid  col="fill">
          <Banner>
              <BannerHeader>
                  <Grid  row gap>
                      <Grid col={4} >
                        <img  src="https://www.usda.gov/themes/usda/img/usda-symbol.svg" alt="USDA Logo" className="usda-header_logo-img" />
                      </Grid>
                  <Grid col="fill">
                  <p className="usa-footer__logo-heading ">U.S. Department Of Agriculture</p>
                  </Grid>
                </Grid>
              
              </BannerHeader>
          </Banner>
          </Grid>
         </Grid>
        <GridContainer>  
          <Fieldset >
            <Grid row gap="md">
              <Grid col="auto"><TextInput title="Solicitation Number" id="input-sol_num" name="input-sol_num" placeholder="Solicitations Number" type="text"  onChange={(e) => requestSearch(e.target.value)} /></Grid>
              <Grid col="auto"><TextInput title="Procurement Instrument Identifier(PIID)" id="input-proc_id" name="input-proc_id" placeholder="Procurement Instrument Identifier(PIID)" type="text" onChange={(e) => requestSearch(e.target.value)}/></Grid>
              <Grid col="auto"><TextInput title="Award ID" id="input-award_id" name="input-award_id" placeholder="Award ID" type="text" onChange={(e) => requestSearch(e.target.value)}/></Grid>
              <Grid col="auto"><Checkbox title="Latest Version" id="latest-sol" name="latest-sol" label="Latest Version" /></Grid>
            </Grid>  
            <Grid row gap="md">
              <Grid col="auto">
                <Select title="Product Category" id="input-prod_cat" name="input-prod_cat"  onChange={(e) => handleProductCat(e.target.selectedOptions)} defaultValue={" "}>
                      <option value="Meat">
                    Meat
                    </option>
                    <option value="Vegetables">
                    Vegetables
                    </option>
                </Select>

              </Grid>
              <Grid col="auto"><TextInput title="Product Name" id="input-prod_name" name="input-prod_name" placeholder="Product Name" type="text" onChange={(e) => requestSearch(e.target.value)}/></Grid>
          

  
       
             <Grid col="auto"> 
              <Select title="Publish Date" id="input-pub_dt" name="input-pub_dt"  onChange={(e) => handlePubDates(e.target.selectedOptions)} defaultValue={pubDateValue}>
                  <option value="Any">
                  Any
                </option>
                <option value="Today">
                Today
                </option>
                <option value="Last 30 days">
                Last 30 days
                </option>
                <option value="Last 60 Days">
                Last 60 Days
                </option>
                <option value="1 Year">
                1 Year
                </option>
              </Select>
            </Grid>
            <Grid col="auto">
              <Select title="Document Type" id="input-doc_cat" name="input-doc_ca"  onChange={(e) => handleDocumentCategory(e.target.selectedOptions)} defaultValue={docCategory}>
                        <option value="Solicitations">
                        Solicitations
                      </option>
                      <option value="Specifications">
                      Specifications
                      </option>
                      <option value="Template">
                      Template
                      </option>
                      <option value="Supporting Documents">
                      Supporting Documents
                      </option>
  
                    </Select>
            </Grid>
            <Grid col="auto" className="margin-top-1"><Button title="Search" type="button" onClick={applyFilters}>Search</Button></Grid>
            <Grid col="auto" className="margin-top-1"><Button title="Advanced Search" type="button" onClick={handleHideAdavanceOptions}>Advanced Search</Button></Grid>
            
            <Grid col="auto" className="margin-top-1"><Button title="Export To Excel" type="button" onClick={exportToExcel}>Export To Excel</Button></Grid>
          </Grid>
        </Fieldset>
          <Fieldset className="margin-top-1" legend="Advanced Search Options" legendStyle="large" hidden={hideAdavanceOptions}>
              <Grid className="margin-top-neg-3" row gap="md">
              <Grid col="auto"><Label htmlFor="input-perf_dt">Performance Period</Label></Grid>
              </Grid>
              <Grid row gap="lg">
                <Grid col="auto"><DatePicker
                                    aria-describedby="performance-period-hint"
                                    aria-labelledby="performance-period-label"
                                    id="input-perf_dt"
                                    name="input-perf_dt"
                                    placeholder='mm/dd/yyyy'
                                    title="Performance Period"    /></Grid>
                <Grid col="auto">
                  <Select title="Offer Date" id="input-offer_dt" name="input-Offer_dt"  onChange={(e) => handleOfferDates(e.target.selectedOptions)} defaultValue={pubDateValue}>
                      <option value="Any">
                      Any
                    </option>
                    <option value="Today">
                    Today
                    </option>
                    <option value="Last 30 days">
                    Last 30 days
                    </option>
                    <option value="Last 60 Days">
                    Last 60 Days
                    </option>
                    <option value="1 Year">
                    1 Year
                    </option>
                  </Select>
                </Grid>
                <Grid col="auto">
                    <Select title="Award Date" id="input-award_dt" name="input-award_dt"  onChange={(e) => handleAwardDates(e.target.selectedOptions)} defaultValue={pubDateValue}>
                      <option value="Any">
                      Any
                    </option>
                    <option value="Today">
                    Today
                    </option>
                    <option value="Last 30 days">
                    Last 30 days
                    </option>
                    <option value="Last 60 Days">
                    Last 60 Days
                    </option>
                    <option value="1 Year">
                    1 Year
                    </option>
                  </Select>
                </Grid>
                <Grid col="auto"> <Select title="Solicitation Method" id="input-sol_method" name="input-sol_method"  onChange={(e) => handleSolMethod(e.target.selectedOptions)} defaultValue={" "}>
                    <option value="RFQ">
                    RFQ
                    </option>
                    <option value="IFB">
                    IFB
                    </option>
                    <option value="Pre-RFP">
                    Pre-RFP
                    </option>
                  </Select>
                </Grid>
                <Grid col="auto"><Checkbox title="Active Solicitation" id="input-active_sol" name="active-active_sol" label="Active Solicitation" /></Grid>
               
              </Grid>
                <Grid row gap="lg">
                  <Grid col="auto"><TextInput title="Package Number" id="input-pkg_num" name="input-pkg_num" placeholder="Package Soliciation Number" type="text" onChange={(e) => requestSearch(e.target.value)}/></Grid>
                 
                <Grid col="auto">
                      <Select title="Purchasing Group" id="input-pur_grp" name="input-pur_grp"  onChange={(e) => handlePurchaseGropu(e.target.selectedOptions)} defaultValue={" "}>
                        <option value="pur_grp_1">
                        Purchase Group 1
                      </option>
                      <option value="pur_grp_1">
                      Purchase Group 2
                      </option>
                    </Select>
                  </Grid>
              
                 
                
              </Grid>
          </Fieldset>
 
         <Grid row>
            <Grid col="auto" >
              <div className="usa-table-container--scrollable">
            <table className="usa-table usa-table--striped usa-table--borderless">
              <thead>
                <tr>
                  { headers.map((header, index) =>(
                    <th scope="col" title={header.label} key={index} onClick={()=> handleHeaderClick(header)}>
                      <div>
                    <span>{header.label}</span>
                      {(header.key === sort.keyToSort  && header.id !== 7)&& (
                        
                    

          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" className="usa-icon usa-icon--size-2" focusable="false" role="img"><path d="M15.17 15 13 17.17V6.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 11 6.83v10.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15z"></path></svg>
                      )}

                      </div>
                    </th>

                
                  ))}
                </tr>
              </thead>
              <tbody>
              {
            
        
                getSortedArray(filter).map((file, i) =>(
                
                  <tr key={i}>
                    <td ><div className="display-inline-flex"><Link title={file.sol_num} href={"http://localhost:5173/?solicitation="+file.sol_num}>{file.sol_num}</Link><a title="Copy Solicitation Link"><Icon.ContentCopy title="Copy Solication Link" className=" margin-05"
                    onClick={ async ()=>{
                      let url  = "https://wbscm-ppp.simlix.org/?solicitation="+file.sol_num;
                     await navigator.clipboard.writeText(url);
                    }
                  
                  }/></a></div>  </td>
                    <td title={file.proc_id}>{file.proc_id}</td>
                    <td title={file.offer_dt}>{file.offer_dt}</td>
                    <td title={file.sol_updt_dt}>{file.sol_updt_dt}</td>
                    <td title={file.mat_grp}>{file.mat_grp}</td>
                    <td title={file.doc_cat}>{file.doc_cat}</td>
                    
                    <td title="Document Links"> 
               
                      <ModalToggleButton  className="usa-button usa-button--outline" modalRef={modalRef} onClick={() => {

                              console.log("in the modal")

                              let a = file.file_name.items;
                              setLinks(a);
                        
                              setSolURL(file.sol_num);
                              setSolURLCopied(false);

                            }} opener>
                      Document Links
                     
                     </ModalToggleButton >
                  
                  </td>

                  </tr>


                ))
              }
            </tbody>
           
          </table>
          </div>
        </Grid>
      </Grid>
    </GridContainer>
    
    <Modal ref={modalRef} id="example-modal-1" aria-labelledby="modal-1-heading" aria-describedby="modal-1-description"  className="usa-modal usa-modal--lg"> 
    
        <ModalHeading>Solication {solURL} Related Documents</ModalHeading>
              {links.map((link) => (
                <IconList  key={link.name}>
                  <IconListItem>
                    <IconListIcon>
                    <a title="Copy Document Link"> <Icon.ContentCopy  onClick={async ()=>{
                  
                      await navigator.clipboard.writeText(link.url);
                    }}/></a>
                    </IconListIcon>
                    <IconListContent>
                      <Link target="_blank" href={link.url}>{link.name}</Link>
                    </IconListContent>
                </IconListItem>
                </IconList>       
          ))}
        
        <Button tooltip="Copy Solicitation Link" className="margin-top-1" id="copy-sol-url" type="button" onClick={handleCopySolURL}>{!solURLCopied ? 'Copy Solicitation Link' : 'Copied!'}</Button>

    </Modal>

    <footer className="usa-footer usa-footer--slim">
  <div className="grid-container usa-footer__return-to-top">
    <a href="#">Return to top</a>
  </div>
  <div className="usa-footer__primary-section">
    <div className="usa-footer__primary-container grid-row">
      <div className="mobile-lg:grid-col-8">
        <nav className="usa-footer__nav" aria-label="Footer navigation,">
          <ul className="grid-row grid-gap">
            <li
              className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content"
            >
              <a className="usa-footer__primary-link" href="https://portal.wbscm.usda.gov" target='_blank'
                >WBSCM</a
              >
            </li>
          
            <li
              className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content"
            >
                <a  className="usa-footer__primary-link" href="tel:1-800-555-5555" target='_blank'>
                877-WBSCM-4U or 877-927-2648
              </a>
             
            </li>
            <li
              className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content"
            >
              <a className="usa-footer__primary-link"  href="mailto:WBSCM.servicedesk@caci.com" target='_blank'>
              WBSCM.servicedesk@caci.com 
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div className="usa-footer__secondary-section">
    <div className="grid-container">
      <div className="usa-footer__logo grid-row grid-gap-2 ">
        <div className="grid-col-auto display-inline-flex margin-left-12">
          <img className="usa-footer__logo-img " src="https://www.usda.gov/themes/usda/img/usda-symbol.svg" alt="" />
          <p className="usa-footer__logo-heading margin-left-2">U.S Department Of Agriculture</p>
        </div>
        <div className="grid-col-auto">
       
        </div>
      </div>
    </div>
  </div>
</footer>
   
      </div>
    </div>
  );
}
