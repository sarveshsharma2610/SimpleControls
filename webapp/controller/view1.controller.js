sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/SimpleType",
	"sap/ui/model/ValidateException",
	"sap/ui/core/Core",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, SimpleType, ValidateException, Core, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("learnui5.controller.view1", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("view1").attachPatternMatched(this._onObjectMatched, this);
            },

            // Button Alert
            // onPress: function(){
            //     alert("You pressed a Button")
            // }

            // Button Message Toast
            // onPress: function () {
            //     MessageToast.show("Button Pressed!"); // Show the toast message
            // }


            // Button Message Toast with button name
            onPress: function (evt) {
                MessageToast.show(evt.getSource().getId() + " Pressed");
            },

            onSubmit: function(){

                var allfilled = true;
                var allValid = true;
                var empid = this.getView().byId("employeeIDFVF1").getValue();
                var name = this.getView().byId("nameFVF1").getValue();
                var careerlevel = this.getView().byId("careerLevelFVF1").getValue();
                var email = this.getView().byId("emailFVF1").getValue();
                var phone = this.getView().byId("phoneNoFVF1").getValue();
                var pincode = this.getView().byId("pinCodeFVF1").getValue();

                this.getView().byId("employeeIDFVF1").setValueState("None");
                this.getView().byId("nameFVF1").setValueState("None");
                this.getView().byId("careerLevelFVF1").setValueState("None");
                this.getView().byId("emailFVF1").setValueState("None");
                this.getView().byId("phoneNoFVF1").setValueState("None");
                this.getView().byId("pinCodeFVF1").setValueState("None");   

                if(empid=="" || empid==undefined)
                {
                    allfilled=false;
                    this.getView().byId("employeeIDFVF1").setValueState("Error");
                    this.getView().byId("employeeIDFVF1").setValueStateText("Please Enter Employee ID");
                }
                else
                {
                    allValid=false;
                    var empid_regex = /^[0-9]+$/;
                    if(!empid.match(empid_regex) || empid.length!=8)
                    {
                        this.getView().byId("employeeIDFVF1").setValueState("Error");
                        this.getView().byId("employeeIDFVF1").setValueStateText("Employee ID should be of 8 digits only");
                    }
                }

                
                if(name=="" || name==undefined)
                {
                    allfilled=false;
                    this.getView().byId("nameFVF1").setValueState("Error");
                    this.getView().byId("nameFVF1").setValueStateText("Please Enter Name");
                }
                else
                {
                    allValid=false;
                    var name_regex = /^[A-Za-z\s]*$/;
                    if(!name.match(name_regex))
                    {
                        this.getView().byId("nameFVF1").setValueState("Error");
                        this.getView().byId("nameFVF1").setValueStateText("Invalid Name, only alphabets allowed");
                    }
                }

                if(careerlevel=="" || careerlevel==undefined)
                {
                    allfilled=false;
                    this.getView().byId("careerLevelFVF1").setValueState("Error");
                    this.getView().byId("careerLevelFVF1").setValueStateText("Please Enter Career Level");
                }
                else
                {
                    allValid=false;
                    var careerlevel_regex = /^[0-9]+$/;
                    if(!careerlevel.match(careerlevel_regex) || careerlevel.length>2 || careerlevel>12)
                    {
                        this.getView().byId("careerLevelFVF1").setValueState("Error");
                        this.getView().byId("careerLevelFVF1").setValueStateText("Invalid Career Level");
                    }
                }

                if(email=="" || email==undefined)
                {
                    allfilled=false;
                    this.getView().byId("emailFVF1").setValueState("Error");
                    this.getView().byId("emailFVF1").setValueStateText("Please Enter E-mail ID");
                }
                else
                {
                    allValid=false;
                    var email_regex = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
                    if(!email.match(email_regex))
                    {
                        this.getView().byId("emailFVF1").setValueState("Error");
                        this.getView().byId("emailFVF1").setValueStateText("Invalid Email ID");
                    }
                }

                if(phone=="" || phone==undefined)
                {
                    allfilled=false;
                    this.getView().byId("phoneNoFVF1").setValueState("Error");
                    this.getView().byId("phoneNoFVF1").setValueStateText("Please Enter Phone No.");
                }
                else
                {
                    allValid=false;
                    var phone_regex = /^[0-9]+$/;
                    if(!phone.match(phone_regex) || phone.length!=10)
                    {
                        this.getView().byId("phoneNoFVF1").setValueState("Error");
                        this.getView().byId("phoneNoFVF1").setValueStateText("Invalid Phone Number (Should be 10 Digits only)");
                    }
                }

                if(pincode=="" || pincode==undefined)
                {
                    allfilled=false;
                    this.getView().byId("pinCodeFVF1").setValueState("Error");
                    this.getView().byId("pinCodeFVF1").setValueStateText("Please Enter Pincode");
                }
                else
                {
                    allValid=false;
                    var pincode_regex = /^[0-9]+$/;
                    if(!pincode.match(pincode_regex) || pincode.length!=6)
                    {
                        this.getView().byId("pinCodeFVF1").setValueState("Error");
                        this.getView().byId("pinCodeFVF1").setValueStateText("Invalid Pin Code (Should be 6 Digits only)");
                    }
                }

                if(allfilled==false)
                {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.show("Please fill all fields!"),
                    sap.m.MessageBox.Icon.ERROR,"ERROR";
                }
            },

            onLiveChange: function(){

                var allfilled = true;
                var allValid = true;
                var empid = this.getView().byId("employeeIDLVF").getValue();
                var name = this.getView().byId("nameLVF").getValue();
                var careerlevel = this.getView().byId("careerLevelLVF").getValue();
                var email = this.getView().byId("emailLVF").getValue();
                var phone = this.getView().byId("phoneNoLVF").getValue();
                var pincode = this.getView().byId("pinCodeLVF").getValue();

                this.getView().byId("employeeIDLVF").setValueState("None");
                this.getView().byId("nameLVF").setValueState("None");
                this.getView().byId("careerLevelLVF").setValueState("None");
                this.getView().byId("emailLVF").setValueState("None");
                this.getView().byId("phoneNoLVF").setValueState("None");
                this.getView().byId("pinCodeLVF").setValueState("None");   

                if(empid=="" || empid==undefined || empid.length!=8)
                {
                    allfilled=false;
                    this.getView().byId("employeeIDLVF").setValueState("Error");
                    this.getView().byId("employeeIDLVF").setValueStateText("Please Enter 8 digits Employee ID");
                }
                else
                {
                    allValid=false;
                    var empid_regex = /^[0-9]+$/;
                    if(!empid.match(empid_regex))
                    {
                        this.getView().byId("employeeIDLVF").setValueState("Error");
                        this.getView().byId("employeeIDLVF").setValueStateText("Only Integers allowed, Max Length 8 digits");
                    }
                }

                
                if(name=="" || name==undefined)
                {
                    allfilled=false;
                    this.getView().byId("nameLVF").setValueState("Error");
                    this.getView().byId("nameLVF").setValueStateText("Please Enter Name");
                }
                else
                {
                    allValid=false;
                    var name_regex = /^[A-Za-z\s]*$/;
                    if(!name.match(name_regex))
                    {
                        this.getView().byId("nameLVF").setValueState("Error");
                        this.getView().byId("nameLVF").setValueStateText("Invalid Name, only alphabets allowed");
                    }
                }

                if(careerlevel=="" || careerlevel==undefined)
                {
                    allfilled=false;
                    this.getView().byId("careerLevelLVF").setValueState("Error");
                    this.getView().byId("careerLevelLVF").setValueStateText("Please Enter Career Level");
                }
                else
                {
                    allValid=false;
                    var careerlevel_regex = /^[0-9]+$/;
                    if(!careerlevel.match(careerlevel_regex) || careerlevel>12 || careerlevel<1)
                    {
                        this.getView().byId("careerLevelLVF").setValueState("Error");
                        this.getView().byId("careerLevelLVF").setValueStateText("Invalid Career Level");
                    }
                }

                if(email=="" || email==undefined)
                {
                    allfilled=false;
                    this.getView().byId("emailLVF").setValueState("Error");
                    this.getView().byId("emailLVF").setValueStateText("Please Enter E-mail ID");
                }
                else
                {
                    allValid=false;
                    var email_regex = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
                    if(!email.match(email_regex))
                    {
                        this.getView().byId("emailLVF").setValueState("Error");
                        this.getView().byId("emailLVF").setValueStateText("Invalid Email ID");
                    }
                }

                if(phone=="" || phone==undefined)
                {
                    allfilled=false;
                    this.getView().byId("phoneNoLVF").setValueState("Error");
                    this.getView().byId("phoneNoLVF").setValueStateText("Please Enter Phone No.");
                }
                else
                {
                    allValid=false;
                    var phone_regex = /^[0-9]+$/;
                    if(!phone.match(phone_regex) || phone.length!=10)
                    {
                        this.getView().byId("phoneNoLVF").setValueState("Error");
                        this.getView().byId("phoneNoLVF").setValueStateText("Invalid Phone Number (Should be 10 Digits only)");
                    }
                }

                if(pincode=="" || pincode==undefined)
                {
                    allfilled=false;
                    this.getView().byId("pinCodeLVF").setValueState("Error");
                    this.getView().byId("pinCodeLVF").setValueStateText("Please Enter Pincode");
                }
                else
                {
                    allValid=false;
                    var pincode_regex = /^[0-9]+$/;
                    if(!pincode.match(pincode_regex) || pincode.length!=6)
                    {
                        this.getView().byId("pinCodeLVF").setValueState("Error");
                        this.getView().byId("pinCodeLVF").setValueStateText("Invalid Pin Code, 6 digits only)");
                    }
                }            
            },

            onSubmitLVF: function(){      
                
                var empid = this.getView().byId("employeeIDLVF").getValue();
                var name = this.getView().byId("nameLVF").getValue();
                var careerlevel = this.getView().byId("careerLevelLVF").getValue();
                var email = this.getView().byId("emailLVF").getValue();
                var phone = this.getView().byId("phoneNoLVF").getValue();
                var pincode = this.getView().byId("pinCodeLVF").getValue();
                
                if(empid=="" || empid==undefined || name=="" || name==undefined|| careerlevel=="" || careerlevel==undefined || email=="" || email==undefined || phone=="" || phone==undefined || pincode=="" || pincode==undefined)
                {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.show("Please fill all fields!"),
                    sap.m.MessageBox.Icon.ERROR,"ERROR";
                }
                else
                {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.show("Validation Successful");
                }
            },
            
            onLogin: function(){
                var username = this.getView().byId("usernamelp").getValue();
                var password = this.getView().byId("passwordlp").getValue();

                if(username=="sarvesh" && password=="123")
                {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("view2");
                }
                else
                {
                    MessageToast.show("Invalid User");
                }
            }          
        });
});