// Utilities
import { defineStore } from "pinia";
import axios from "axios";
import emailjs from "emailjs-com";
import router from "../router/index";
import { setInterval } from "core-js";
export const useAppStore = defineStore("app", {
  state: () => {
    return {
      Url: "http://localhost:3000",
      check: null,
      checkEmail: null,
      IdUser: null,
      StatusSuccess: "",
      DirectSuccess: "",
      IconDialog: "",
      SubmitForgot: "",
      Clients: [],
      Devices: [],
      Tasks:[],
      TasksTodo: [],
      TasksDone: [],
      TasksProgress:[],
      Member:[],
      MemberAvailable: [],
      MemberUnavailable: [],
      DetailClient: [],
      DeviceClient: [],
      DetailTasks:[],
      DetailMember:[],
      TaskMember:[],
      Logins: [],
      StatusLogin: true,
      AddClientDialog: false,
      AddDeviceDialog: false,
      AddTaskDialog: false,
      EditClientDialog: false,
      EditDeviceDialog: false,
      DeleteDeviceDialog: false,
      DetailTaskDialog:false,
      EditTaskDialog:false,
      Alert: false,
      TextAlert: "",
      ColorAlert: "",
      ListCompany: [],
    };
  },

  getters: {
    LoadSession() {
      this.OTP = sessionStorage.getItem("code");
    },

  },
  actions: {
    async FetchClient() {
      setInterval(async () => {
        const res = await fetch(`${this.Url}/client`);
        this.Clients = await res.json();
      }, 5000);
    },

    async FetchDevice() {
      setInterval(async () => {
        const res = await fetch(`${this.Url}/device`);
        this.Devices = await res.json();
      }, 5000);
    },
    async FetchTasks() {
      setInterval(async () => {
        const res = await fetch(`${this.Url}/task`);
        this.Tasks = await res.json();
      }, 5000);

    },
    async FetchTasksTodo() {
      setInterval(async () => {
        const res = await fetch(`${this.Url}/task?Status=To do`);
        this.TasksTodo = await res.json();
      }, 5000);
    },
    async FetchTasksProgress() {
      setInterval(async () => {
        const res = await fetch(`${this.Url}/task?Status=Progress`);
        this.TasksProgress = await res.json();
      }, 5000);
    },
    async FetchTasksDone() {
      setInterval(async () => {
        const res = await fetch(`${this.Url}/task?Status=Done`);
        this.TasksDone = await res.json();
      }, 5000);
    },
    async FetchTaskMember() {
      setInterval(async () => {
        const res = await fetch(`${this.Url}/task?`);
        this.TasksDone = await res.json();
      }, 5000);
    },
    async FetchMember() {
      setInterval(async () => {
        const res = await fetch(`${this.Url}/member`);
        this.Members = await res.json();
      }, 5000);
    },
    async FetchMemberAvailable() {
      setInterval(async () => {
        const res = await fetch(`${this.Url}/member?Available=true`);
        this.MemberAvailable = await res.json();
      }, 5000);
    },
    async FetchMemberUnavailable() {
      setInterval(async () => {
        const res = await fetch(`${this.Url}/member?Available=false`);
        this.MemberUnavailable = await res.json();
      }, 5000);
    },
    async FetchDetailClient() {
      const ID = localStorage.getItem("IDClient");
      setInterval(async () => {
        const res = await fetch(`${this.Url}/client/${ID}`);
        this.DetailClient = await res.json();
      }, 5000);
    },
    async FetchDeviceClient() {
      const ID = localStorage.getItem("IDClient");
      setInterval(async () => {
        const res = await fetch(`${this.Url}/device?IDCompany=${ID}`);
        this.DeviceClient = await res.json();
      }, 5000);
    },
    async FetchDetailMember() {
      const ID = localStorage.getItem("IDMember");
      setInterval(async () => {
        const res = await fetch(`${this.Url}/member/${ID}`);
        this.DetailMember = await res.json();
      }, 5000);
    },
    async DetailList(id) {
      const res = await fetch(`${this.Url}/client/${id}`);
      const DetailClient = await res.json();
      localStorage.setItem("IDClient", id);
      this.IDClient = id;
      router.push(`/Detail-Client/${DetailClient.Company}`);
    },
    async DetailTask(id) {
      const res = await fetch(`${this.Url}/task/${id}`);
      this.DetailTasks = await res.json();
    },
    async DetailMembers(id) {
      const res = await fetch(`${this.Url}/member/${id}`);
      const DetailMember = await res.json();
      localStorage.setItem("IDMember", id)
      localStorage.setItem("IDTask", DetailMember.IDTask)
      router.push(`/Detail-Member/${DetailMember.Name}`)
    },
    async FetchTaskMember() {
      const ID = localStorage.getItem("IDTask");
      setInterval(async () => {
        const res = await fetch(`${this.Url}/device?IDTask=${ID}`);
        this.TaskMember = await res.json();
      }, 5000);
    },
    async Login(Email, Password) {
      try {
        const res = await fetch(`${this.Url}/user?Email=${Email}`);
        this.Logins = await res.json();
        const Loginss = this.Logins[0];

        if (Password == Loginss.Password) {
          router.push("/Client");
          localStorage.setItem("Login", Loginss.id);
          this.StatusLogin = true;
        } else {
          this.check = true;
          this.DirectSuccess = "/Login";
          this.StatusSuccess = "Email or Password not correct";
          this.IconDialog = false;
        }
      } catch (error) {
        this.check = true;
        this.DirectSuccess = "/Login";
        this.StatusSuccess = "Email or Password not correct";
        this.IconDialog = true;
      }
    },

    SignUp(FullName, Email, PhoneNumber, Password) {
      axios
        .post(`${this.Url}/user`, {
          FullName,
          Email,
          PhoneNumber,
          Password,
        })
        .then(function (response) {
          console.log(response);
          this.check = true;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    OpenSuccess() {
      (this.check = true), (this.StatusSuccess = "Create account success");
      this.DirectSuccess = "/";
    },

    ClosedSuccess() {
      this.check = null;
    },
    async sendEmail(Email) {
      try {
        const res = await fetch(`${this.Url}/user?Email=${Email}`);
        const CheckForgot = await res.json();
        this.IdUser = CheckForgot[0].id;
        const code = Math.floor(Math.random() * 999999) + 100000;
        localStorage.setItem("Code", code);
        localStorage.setItem("Email", Email);
        const templateParams = {
          // Define parameters for your email template
          email: Email,
          Verify: code,
          // Add more parameters as needed
        };

        emailjs
          .send(
            "service_296zkc8",
            "template_s9fp5mp",
            templateParams,
            "Yxw2oIFzr9XR-jT0n"
          )
          .then((response) => {
            router.push("/Verify");
            console.log("Email sent successfully", response);
          })
          .catch((error) => {
            console.error("Error sending email", error);
          });
      } catch (error) {
        this.check = true;
        this.StatusSuccess = "Email unavailable";
        this.DirectSuccess = "/ForgotPassword";
        this.IconDialog = false;
        this.SubmitForgot = false;
      }
    },
    async ChangePassword(NewPassword) {
      axios
        .patch(
          `${this.Url}/user/${this.IdUser}`,
          {
            Password: NewPassword,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("Form submitted successfully!", response.data);
          this.check = true;
          this.StatusSuccess = "Change new password successfully";
          this.DirectSuccess = "/";
          this.IconDialog = true;
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    },

    async AddClients(Company, Address, Manager, Phone, Email, Tax) {
      this.AddClientDialog = false;
      axios
        .post(
          `${this.Url}/client`,
          {
            Company: Company,
            Address: Address,
            Manager: Manager,
            Contact: Phone,
            Email: Email,
            Tax: Tax,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.Alert = true;
          this.TextAlert = "Add client failed";
          this.ColorAlert = "red";
        })
        .then((error) => {
          console.log(error);
          this.Alert = true;
          this.TextAlert = "Add client successfully";
          this.ColorAlert = "success";
        });
    },

    async AddDevices(
      SelectDevice,
      SeriDevice,
      SelectPrinthead,
      SeriPrinthead,
      SelectFuel,
      SelectDate,
      SelectCode,
      Part,
      ID
    ) {
      axios
        .post(
          `${this.Url}/device`,
          {
            IDCompany: ID,
            Device: SelectDevice,
            SeriDevice: SeriDevice,
            Printhead: SelectPrinthead,
            SeriPrinthead: SeriPrinthead,
            Fuel: SelectFuel,
            Code: SelectCode,
            Date: SelectDate,
            Accessory: Part,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.Alert = true;
          this.TextAlert = "Add client failed";
          this.ColorAlert = "red";
          this.AddDeviceDialog = false;
        })
        .then((error) => {
          console.log(error);
          this.Alert = true;
          this.TextAlert = "Add client successfully";
          this.ColorAlert = "success";
          this.AddDeviceDialog = false;
        });
    },
    async EditClients(
      EditCompany,
      EditAddress,
      EditManager,
      EditContact,
      EditEmail,
      EditTax
    ) {
      const ID = localStorage.getItem("IDClient");
      axios
        .put(
          `${this.Url}/client/${ID}`,
          {
            Company: EditCompany,
            Address: EditAddress,
            Manager: EditManager,
            Contact: EditContact,
            Email: EditEmail,
            Tax: EditTax,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.Alert = true;
          this.TextAlert = "Edit client failed";
          this.ColorAlert = "red";
          this.EditDeviceDialog = false;
        })
        .then((error) => {
          console.log(error);
          this.Alert = true;
          this.TextAlert = "Edit client successfully";
          this.ColorAlert = "success";
          this.EditDeviceDialog = false;
        });
    },
    async EditDevices(
      SelectDevice,
      SeriDevice,
      SelectPrinthead,
      SeriPrinthead,
      SelectFuel,
      SelectDate,
      SelectCode,
      Accessory,
      ID,
      IDCompany
    ) {
      axios
        .put(
          `${this.Url}/device/${ID}`,
          {
            IDCompany: ID,
            Device: SelectDevice,
            SeriDevice: SeriDevice,
            Printhead: SelectPrinthead,
            SeriPrinthead: SeriPrinthead,
            Fuel: SelectFuel,
            Code: SelectCode,
            Date: SelectDate,
            Accessory: Accessory,
            IDCompany: IDCompany,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.Alert = true;
          this.TextAlert = "Edit device failed";
          this.ColorAlert = "red";
          this.EditDeviceDialog = false;
        })
        .then((error) => {
          console.log(error);
          this.Alert = true;
          this.TextAlert = "Edit device successfully";
          this.ColorAlert = "success";
          this.EditDeviceDialog = false;
        });
    },
    async DeleteDevice(ID) {
      axios
        .delete(`${this.Url}/device/${ID}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          this.Alert = true;
          this.TextAlert = "Delete device failed";
          this.ColorAlert = "red";
          this.DeleteDeviceDialog = false;
        })
        .then((error) => {
          console.log(error);
          this.Alert = true;
          this.TextAlert = "Delete device successfully";
          this.ColorAlert = "success";
          this.DeleteDeviceDialog = false;
        });
    },
    async AddTask(
      Company,
      Address,
      Manager,
      Contact,
      Engineer,
      Date,
      Title,
      Note,
    ) {
      axios
        .post(
          `${this.Url}/task`,
          {
            Company: Company,
            Address: Address,
            Manager: Manager,
            Contact: Contact,
            Engineer: Engineer,
            Date: Date,
            Title: Title,
            Note: Note,
            Perform: "",
            Status:"todo"
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.Alert = true;
          this.TextAlert = "Add new task failed";
          this.ColorAlert = "red";
          this.AddTaskDialog = false;
        })
        .then((error) => {
          console.log(error);
          this.Alert = true;
          this.TextAlert = "Add new task successfully";
          this.ColorAlert = "success";
          this.AddTaskDialog = false;
        });
    },
  },
});
