import "./Information.css"
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import InformationDetail from "./InformationDetail/InformationDetail";
import BackArrow from "./images/back_arrow.svg"

const useStyles = makeStyles((theme) => ({
    timeline: {
        margin: 0,
        padding: 0,
        position: 'relative',
        alignItems: 'start',
        top: 0,
        left: 0,
    },
    dot: {
        width: 20,
        height: 20,
        backgroundColor: '#5531A7',
        border: '5px solid white',
    },
    connector: {
        width: 1,
        backgroundColor: '#E2E6EE',
    }
}));



const cleanArcture = [
    "Previously, the registration library utilized two activities for handling animation and flow.",
    "All logic and API calls were directly implemented within these activities.",
    "The new implementation replaces the activities with fragments to better manage the flow.",
    "Adopted Clean Architecture principles, moving logic and API calls out of the fragments into dedicated Data Source.",
    "This refactor enhances separation of concerns, making the codebase more maintainable, testable, and scalable."
  ];
  

  const DynamicUi = [
    "Build UI elements dynamically based on API data, allowing real-time updates.",
    "Supports various field types like Textbox, Dropdown, with customizable size and max length.",
    "Easily modify UI from the admin side, changes reflect instantly in the app.",
    "Utilizes Jetpack Compose for efficient and reactive UI building.",
    "Ensures adaptable and responsive user interfaces tailored to user needs."
  ];

  const tableFeatures = [
    "Create dynamic tables with API data.",
    "Every detail for table building is provided in the API.",
    "Room Table is constructed at runtime for data storage.",
    "Allows for flexible table structures based on API specifications.",
    "Tables can be updated dynamically as API data changes."
  ];


  const migrationSuccessContent = [
    "Successfully migrated data from Realm to Room, enhancing our app’s database management.",
    "Developed Room database entities and DAO interfaces to align with the existing Realm schema.",
    "Implemented seamless data migration logic to ensure smooth transition and data integrity.",
    "Thoroughly tested the migration process to confirm that all data is accurately transferred and accessible.",
    "Updated the app’s data access layer, replacing Realm with Room for improved performance and scalability."
];


const moduleRefactorDetails = [
    "Reduced the app’s module structure from 19 modules to just 4, streamlining the project.",
    "Consolidated all essential library code into the main app module for improved organization.",
    "Simplified dependency management by centralizing libraries within the app module package.",
    "Enhanced build times and maintenance efficiency by reducing the number of modules.",
    "Optimized project structure to focus on core functionality and minimize complexity."
];


const permissionManagementDetails = [
    "Created a dynamic system for managing app permissions including camera access, external storage, and more.",
    "Enabled real-time permission requests and updates for enhanced user control.",
    "Simplified integration and management of various permissions within the app.",
    "Improved app security and user experience through efficient and transparent permission handling.",
    "Streamlined the process of granting and updating permissions based on app needs."
];


const settingsScreenRevamp = [
    "Redesigned the settings screen with a modern and intuitive UI for a better user experience.",
    "Implemented new functionalities to enhance the usability and accessibility of settings options.",
    "Streamlined navigation and organization of settings to make adjustments quicker and more efficient."
];


const helpUsImproveRevamp = [
    "Revamped the 'Help Us Improve' screen with a fresh, user-friendly design.",
    "Integrated controls for managing crash reports and log postings based on user selection.",
    "Enhanced functionality to streamline the feedback and error reporting process, improving app reliability."
];


const barcodeScreenRevamp = [
    "Revamped the barcode screen to allow users to add products to their cart by scanning barcodes.",
    "Introduced new sounds for success and failure cases of barcode scanning for a better user experience.",
    "Added a snackbar feature to display product information upon successful scanning.",
    "Improved visual feedback and interaction by integrating sound cues and snackbar notifications.",
    "Enhanced the overall usability of the barcode scanning process within the app."
];


const moreOptionsRevamp = [
    "Revamped the 'More Options' feature to improve user experience by replacing the third-party library menu with a bottom sheet.",
    "Utilized a bottom sheet to display a list of options when the menu is clicked for a more modern and intuitive interface.",
    "Enhanced the visibility and accessibility of options with the new bottom sheet design.",
    "Streamlined user interactions by integrating native components for a smoother and more responsive experience.",
    "Simplified the implementation by moving away from third-party libraries to a more customizable solution."
];


const shippingAddressFeatures = [
    "Users can add detailed shipping addresses for their customers, including address1, mobile number, state, and other necessary details.",
    "Enhanced form fields to capture all required shipping information for accurate delivery.",
    "Streamlined address management to easily update or retrieve shipping details as needed."
];


const customerCategoryFeatures = [
    "Users can categorize their customers during the addition or creation process to better organize their customer base.",
    "Flexible categorization options allow for tailored grouping based on customer needs and preferences.",
    "Improved customer management and segmentation through custom categories for targeted communication and service."
];

const posiflexFeatures = [
    "Integrated support for Posiflex printer SDK, allowing users to print directly from the app using Posiflex printers.",
    "Enhanced printing capabilities enable users to generate receipts and other documents easily.",
    "Seamless setup and connection with Posiflex printers for efficient in-app printing solutions."
];

const shareBillsFeatures = [
    "Users can share their bills and sale details directly with customers via WhatsApp for convenient communication.",
    "Enhanced sharing options streamline the process of sending transaction details to customers.",
    "Improved customer engagement and service by providing quick access to transaction information through popular messaging platforms."
];


const priceManagementFeatures = [
    "Manage pricing with options for grouping, expiration dates, MRP, and selling prices. Flexibly adjust pricing based on various criteria.",
    "Supports auto batch, manual batch, and attribute batching methods. Auto batch uses predefined rules, while manual allows custom setup.",
    "Auto batching automatically applies prices and batches according to rules. Simplifies pricing setup with minimal manual input.",
    "Manual batching lets users configure pricing and batches individually. Provides full control over batch assignments and pricing details.",
    "Attribute batching manages prices and batches based on product attributes. Offers tailored pricing solutions based on specific product features."
];


const strictModeImplementation = [
    "Implemented `StrictMode` in the Android app to detect and handle potential performance issues and misuse of resources.",
    "Enables detection of disk and network operations on the main thread, improving app responsiveness and user experience.",
    "Helps identify memory leaks and other programming issues by monitoring application behavior during runtime.",
    "Provides detailed logs and warnings to address performance bottlenecks and optimize code efficiency.",
    "Facilitates debugging and development by enforcing best practices and ensuring code quality throughout the app."
];


const splashScreenUpdate = [
    "Removed the old splash screen logic that used an activity to display the app logo.",
    "Implemented the new Android splash screen feature for a more seamless and consistent user experience.",
    "Streamlined the splash screen process with built-in support for displaying app logos and branding efficiently."
];

  
function Information({state}) {
    const classes = useStyles();
    return (
        <div className='drop-animation'>
            <div className="project-title-wrapper">
            <img src={BackArrow} alt="back arrow" className="information-back-arrow" onClick={()=> state(false)}/>
            <p className="project-title">Zoho Project Success Stories and Highlights ❤️</p>
            <p></p>
            </div>
            <Timeline className={classes.timeline}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.dot} />
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className="custom-content">
                        <p className='detail-title'>Architecture Overhaul</p>
                        <InformationDetail content={cleanArcture} title={"Registration Library"}/>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.dot} />
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className="custom-content">
                        <p className='detail-title'>Dynamic UI</p>
                        <InformationDetail content={DynamicUi} title={"Customer Form"}/>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.dot} />
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className="custom-content">
                        <p className='detail-title'>Dynamic Local Database</p>
                        <InformationDetail content={tableFeatures} title={"Customer Form Table"}/>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.dot} />
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className="custom-content">
                        <p className='detail-title'>Database Migration</p>
                        <InformationDetail content={migrationSuccessContent} title={"Realm to Room"}/>
                    </TimelineContent>
                </TimelineItem>



                
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.dot} />
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className="custom-content">
                        <p className='detail-title'>Project Structure Optimization</p>
                        <InformationDetail content={moduleRefactorDetails} title={"Module Enhancement"}/>
                    </TimelineContent>
                </TimelineItem>



                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.dot} />
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className="custom-content">
                        <p className='detail-title'>App Permission Management</p>
                        <InformationDetail content={permissionManagementDetails} title={"Camera And External Storage"}/>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.dot} />
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className="custom-content">
                        <p className='detail-title'>Revamp</p>
                        <InformationDetail content={settingsScreenRevamp} title={"Settings Screen"}/>
                        <InformationDetail content={helpUsImproveRevamp} title={"Help us Improve Screen"}/>
                        <InformationDetail content={barcodeScreenRevamp} title={"Camera Barcode Scan"}/>
                        <InformationDetail content={moreOptionsRevamp} title={"More Option"}/>
                    </TimelineContent>
                </TimelineItem>



                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.dot} />
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className="custom-content">
                        <p className='detail-title'>Features</p>
                        <InformationDetail content={priceManagementFeatures} title={"Price Management"}/>
                        <InformationDetail content={shippingAddressFeatures} title={"Shipping Address"}/>
                        <InformationDetail content={customerCategoryFeatures} title={"Customer Category"}/>
                        <InformationDetail content={posiflexFeatures} title={"Posiflex thermal printer"}/>
                        <InformationDetail content={shareBillsFeatures} title={"Report Share"}/>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.dot} />
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className="custom-content">
                        <p className='detail-title'>Enhancement</p>
                        <InformationDetail content={strictModeImplementation} title={"StrictMode"}/>
                        <InformationDetail content={splashScreenUpdate} title={"Splash Screen"}/>
                    </TimelineContent>
                </TimelineItem>
            

            </Timeline>
        </div>
    )
}

export default Information;