// import ApexCharts from "apexcharts";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import DateRangePicker from "react-bootstrap-daterangepicker";
// import "bootstrap-daterangepicker/daterangepicker.css";
// import CollapseHeader from "../../../assets/common/CollapseHeader";
// import { SectionContenxt } from "../../../context/CurrentSection";
// import { PrimaryButton } from "../../../assets/buttons";
import "./dashboard.scss";
import totalEmployeesIcon from "../../assets/icons/Total Employees.svg";
import activeEmployeesIcon from "../../assets/icons/Active Employees.svg";
import inactiveEmployeesIcon from "../../assets/icons/Inactive Employees.svg";
import lineAndBarChartIcon from "../../assets/icons/Line and bar chart.svg";
import activityGuageIcon from "../../assets/icons/Activity gauge.svg";
import drivingPieChartIcon from "../../assets/icons/driving Pie chart.svg";
import iqamaPieChartIcon from "../../assets/icons/iqama pie chart.svg";
import lineChartIcon from "../../assets/icons/line charts.svg";
import { AppContext } from "../../context/AppContext";

// import IconButton from "../../../assets/elements/IconButton";
// import AddEmployeeModal from "../sidebar/employeesModals/AddEmployeeModal";



// import { notifySuccess, notifyWarn } from "../../../assets/elements/Toast";

// import { AuthContext } from "../../../context/AuthContext";

const Dashboard = () => {

  const [isCollapsed, setIsCollapsed] = useState(false);
//   const sectionCtx = useContext(SectionContenxt);
  const [addEmployeeModal, setAddEmployeeModal] = useState(false);
  const [onSubmit, setOnSubmit] = useState(false);
  const { sidebar, setSidebar } = useContext(AppContext);
//   const { accessToken } = useContext(AuthContext);
  const [reportingTo, setReportingTo] = useState([]);
  // Deals By Stage
  const chartRef = useRef(null);
//   useEffect(() => {
//     localStorage.setItem("menuOpened", "Dashboard");
//     sectionCtx.handleChangeSection("Dashboard");
//   }, []);

//   const handleOnSubmit = () => {
//     setAddEmployeeModal(false);
//     setOnSubmit(true);
//   };
//   useEffect(() => {
//     getReportingToOptions();
//   }, []);

//   const { getEmployeesMaster } = MainServices();
  const [employeeQuonts, setEmployeeQuonts] = useState({
    total: "",
    active: "",
    inactive: "",
  });

//   const getReportingToOptions = async () => {
//     try {
//       const response = await getEmployeesMaster({}, accessToken);
//       console.log("Reporting To options: ", response, employeeQuonts);
  
//       if (response?.data?.data?.doc?.length > 0) {
//         let numberEmp = response.data.data.doc;
  
//         setEmployeeQuonts({
//           total: numberEmp.length,
//           active: numberEmp.filter((emp) => emp.status === "active").length,
//           inactive: numberEmp.filter((emp) => emp.status === "inactive").length,
//         });
  
//         setReportingTo(
//           numberEmp.map((manager) => ({
//             label: manager.username,
//             value: manager.publicId,
//           }))
//         );
//       } else {
//         setReportingTo([{ label: "Data not loaded", value: "" }]);
//       }
//     } catch (error) {
//       notifyWarn(error?.response?.data?.message || "An unexpected error occurred");
//       console.error("Error", error);
//     }
//   };

  function closeAddEmployeeModal() {
    setAddEmployeeModal(false);
    document.body.classList.remove("modal-open");
  }

  const handleAddEmployee = () => {
    setAddEmployeeModal(true);
  };

  const handleOnSubmitClose = () => {
    setAddEmployeeModal(false);
    setOnSubmit(false);
  };
  // useEffect(() => {
  //   if (chartRef.current) {
  //     const options = {
  //       series: [
  //         {
  //           name: "sales",
  //           colors: ["#FFC38F"],
  //           data: [
  //             {
  //               x: "Inpipeline",
  //               y: 400,
  //             },
  //             {
  //               x: "Follow Up",
  //               y: 130,
  //             },
  //             {
  //               x: "Schedule",
  //               y: 248,
  //             },
  //             {
  //               x: "Conversation",
  //               y: 470,
  //             },
  //             {
  //               x: "Won",
  //               y: 470,
  //             },
  //             {
  //               x: "Lost",
  //               y: 180,
  //             },
  //           ],
  //         },
  //       ],
  //       chart: {
  //         type: "bar",
  //         height: 275,
  //       },
  //       plotOptions: {
  //         bar: {
  //           borderRadiusApplication: "around",
  //           columnWidth: "40%",
  //         },
  //       },
  //       colors: ["#00918E"],
  //       xaxis: {
  //         type: "category",
  //         group: {
  //           style: {
  //             fontSize: "7px",
  //             fontWeight: 700,
  //           },
  //         },
  //       },
  //       yaxis: {
  //         min: 0,
  //         max: 500,
  //         tickAmount: 5,
  //       },
  //     };

  //     const chart = new ApexCharts(chartRef.current, options);
  //     chart.render();

  //     // Cleanup on unmount
  //     return () => {
  //       chart.destroy();
  //     };
  //   }
  // }, []);

  //  Leads By Stage
  //const LeadsBySatge = useRef(null);

  // useEffect(() => {
  //   if (LeadsBySatge.current) {
  //     const options = {
  //       series: [
  //         {
  //           data: [400, 220, 448],
  //         },
  //       ],
  //       chart: {
  //         type: "bar",
  //         height: 150,
  //       },
  //       plotOptions: {
  //         bar: {
  //           horizontal: true,
  //         },
  //       },
  //       dataLabels: {
  //         enabled: false,
  //       },
  //       colors: ["#FC0027"],
  //       xaxis: {
  //         categories: ["Conversation", "Follow Up", "Inpipeline"],
  //         min: 0,
  //         max: 500,
  //         tickAmount: 5,
  //       },
  //     };

  //     const chart = new ApexCharts(LeadsBySatge.current, options);
  //     chart.render();

  //     // Cleanup on unmount
  //     return () => {
  //       chart.destroy();
  //     };
  //   }
  // }, []);
  // Won Deals Chat
  // const wonChat = useRef(null);
  // useEffect(() => {
  //   const options = {
  //     series: [
  //       {
  //         data: [400, 122, 250],
  //       },
  //     ],
  //     chart: {
  //       type: "bar",
  //       height: 150,
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: true,
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     colors: ["#5CB85C"],
  //     xaxis: {
  //       categories: ["Conversation", "Follow Up", "Inpipeline"],
  //       min: 0,
  //       max: 500,
  //       tickAmount: 5,
  //     },
  //   };

  //   if (wonChat.current) {
  //     const chart = new ApexCharts(wonChat.current, options);
  //     chart.render();

  //     // Cleanup on unmount
  //     return () => {
  //       chart.destroy();
  //     };
  //   }
  // }, []);
  // Deals By Year
  // const dealsByYear = useRef(null);
  // useEffect(() => {
  //   const options = {
  //     series: [
  //       {
  //         name: "Deals",
  //         data: [10, 20, 30, 15, 22, 40, 30, 20, 30, 18, 30, 60],
  //       },
  //     ],
  //     chart: {
  //       height: 273,
  //       type: "area",
  //       zoom: {
  //         enabled: false,
  //       },
  //     },
  //     colors: ["#E41F07"],
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: "straight",
  //     },
  //     title: {
  //       text: "",
  //       align: "left",
  //     },
  //     xaxis: {
  //       categories: [
  //         "Jan",
  //         "Feb",
  //         "Mar",
  //         "Apr",
  //         "May",
  //         "Jun",
  //         "Jul",
  //         "Aug",
  //         "Sep",
  //         "Oct",
  //         "Nov",
  //         "Dec",
  //       ],
  //     },
  //     yaxis: {
  //       min: 10,
  //       max: 60,
  //       tickAmount: 5,
  //       labels: {
  //         formatter: (val) => {
  //           return val / 1 + "K";
  //         },
  //       },
  //     },
  //     legend: {
  //       position: "top",
  //       horizontalAlign: "left",
  //     },
  //   };

  //   if (dealsByYear.current) {
  //     const chart = new ApexCharts(dealsByYear.current, options);
  //     chart.render();

  //     // Cleanup on unmount
  //     return () => {
  //       chart.destroy();
  //     };
  //   }
  // }, []);

  // const initialSettings = {
  //   endDate: new Date("2020-08-11T12:30:00.000Z"),
  //   ranges: {
  //     "Last 30 Days": [
  //       new Date("2020-07-12T04:57:17.076Z"),
  //       new Date("2020-08-10T04:57:17.076Z"),
  //     ],
  //     "Last 7 Days": [
  //       new Date("2020-08-04T04:57:17.076Z"),
  //       new Date("2020-08-10T04:57:17.076Z"),
  //     ],
  //     "Last Month": [
  //       new Date("2020-06-30T18:30:00.000Z"),
  //       new Date("2020-07-31T18:29:59.999Z"),
  //     ],
  //     "This Month": [
  //       new Date("2020-07-31T18:30:00.000Z"),
  //       new Date("2020-08-31T18:29:59.999Z"),
  //     ],
  //     Today: [
  //       new Date("2020-08-10T04:57:17.076Z"),
  //       new Date("2020-08-10T04:57:17.076Z"),
  //     ],
  //     Yesterday: [
  //       new Date("2020-08-09T04:57:17.076Z"),
  //       new Date("2020-08-09T04:57:17.076Z"),
  //     ],
  //   },
  //   startDate: new Date("2020-08-04T04:57:17.076Z"), // Set "Last 7 Days" as default
  //   timePicker: false,
  // };
//   const location = useLocation();
//   const [showLoader, setShowLoader] = useState(false);

//   useEffect(() => {
//     if (location.pathname === "/dashboard/deals-dashboard") {
//       setShowLoader(true);
//       setTimeout(() => {
//         setShowLoader(false);
//       }, 2000);
//     }
//   }, [location.pathname]);

  return (
    <>
      {/* Page Wrapper */}
      {/* {showLoader &&
      <>
      <div className="preloader">
      <div className="preloader">
        <div className="loader"></div>
      </div>
    </div>
      </>} */}
      {/* <Loader/> */}
      <div
            className={sidebar ? "taskMain " : "cx-active taskMain"}
            id='cx-main'
        >
      <div
        className={`${
          !isCollapsed ? "page-wrapper" : "col-md-12 page-wrapper"
        }`}
      >
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="page-header">
                <div className="col-md-4">
                  <h3 className="page-title">Dashboard</h3>
                </div>
                {/* {grantPermission("Employee:write") && (
                  <div>
                    <IconButton
                      iconType="add"
                      title="New Employee"
                      //   onClick={() => onAddProduct("")}
                      onClick={handleAddEmployee}
                    />
                  </div>
                )} */}
              </div>
              {(
                <>
                  <div className="employees-divs row mt-3 mb-3">
                    <div className="each-employee-div">
                      <div className="employee-div-formatting">
                        <div className="">
                          <img
                            src={totalEmployeesIcon}
                            alt="Total Employees Image"
                          />
                        </div>
                        <div>
                          <div>{employeeQuonts.total}</div>
                          <div> Total Employees</div>
                        </div>
                      </div>
                    </div>
                    <div className="each-employee-div">
                      <div className="employee-div-formatting">
                        <div className="">
                          <img
                            src={activeEmployeesIcon}
                            alt="Active Employees Image"
                          />
                        </div>
                        <div>
                          <div>{employeeQuonts.active}</div>
                          <div>Active Employees</div>
                        </div>
                      </div>
                    </div>
                    <div className="each-employee-div">
                      <div className="employee-div-formatting">
                        <div className="">
                          <img
                            src={inactiveEmployeesIcon}
                            alt="Inactive Employees Image"
                          />
                        </div>
                        <div>
                          <div>{employeeQuonts.inactive}</div>
                          <div>Inactive Employees</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-9 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="dashboard-heading-format">
                              Employee Status by Contract Type
                            </div>
                            <div className="dropdown-select-css">
                              <select>
                                <option>Last Week</option>
                                <option>Last Month</option>
                                <option>Last Year</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <img
                              src={lineAndBarChartIcon}
                              alt="Line And Bar Chart"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="statistic-header">
                            <div className="dashboard-heading-format">
                              Employee Contract Status Overview
                            </div>
                          </div>
                          <img
                            src={activityGuageIcon}
                            alt="Activity Guage Icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3 d-flex ">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="dashboard-heading-format">
                              Driving License
                            </div>
                            <div className="dropdown-select-css">
                              <select>
                                <option>Last Week</option>
                                <option>Last Month</option>
                                <option>Last Year</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <img
                              src={drivingPieChartIcon}
                              alt="Line And Bar Chart"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="dashboard-heading-format">
                              Iqama Status
                            </div>
                            <div className="dropdown-select-css">
                              <select>
                                <option>Last Week</option>
                                <option>Last Month</option>
                                <option>Last Year</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <img
                              src={iqamaPieChartIcon}
                              alt="Line And Bar Chart"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="statistic-header">
                            <div className="dashboard-heading-format">
                              Employee Status by Department
                            </div>
                          </div>
                          <img src={lineChartIcon} alt="Activity Guage Icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* {addEmployeeModal && (
        <AddEmployeeModal
          handleOnSubmit={handleOnSubmit}
          isOpen={addEmployeeModal}
          onClose={closeAddEmployeeModal}
        />
      )} */}

     
      {/* /Page Wrapper */}
      </div>
    </>
  );
};

export default Dashboard;