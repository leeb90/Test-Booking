// login.spec.js
//var expect = require('chai').expect;

var LoginPage = require('./login.page');
var resortArray = [
    "SEB,S,2",
    "SRB,S,2",
    "SLS,S,2",
    "INN,S,2",
    "SMB,S,2",
    "SNG,S,2",
    "SRC,S,2",
    "BRP,S,6",
    "SWH,S,2",
    "SGL,S,2",
    "SHC,S,2",
    "SLU,S,2",
    "SBD,S,2"
];

var d = new Date();
var month = d.getMonth();
var year = d.getFullYear();
var host='';
var ip=[];


var hostsTor = ["Array of IPs"
];

var hostsVan = ["Array of IPs"
];




describe('Tests Bookings Sandals', function() {
   
    
    it('should Make Test Bookings for Toronto', function() {

        if (month>=9){
            month=1;
            year=year+1;
        } 

        else {
            month=month+3;
        }

        for(var x=0; x < 2; x++) {
            host=hostsTor[Math.floor(Math.random() * hostsTor.length)];
            ip[0]= host.match(/(\d+)(?!.*\d)/g);


    

            LoginPage.open(host);
            LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
            LoginPage.chkinmonth.selectByValue(month);
            LoginPage.chkinday.selectByValue('1');
            LoginPage.chkinyear.selectByValue(year);
            LoginPage.btnair.click();
            LoginPage.dptcountry.selectByValue('USA');
            LoginPage.dptstate.selectByValue('AZ');
            LoginPage.dptcity.selectByValue('PHX,PHOENIX');
            LoginPage.submit.submitForm();
            

             browser.waitUntil(function (){

                if(LoginPage.NoAirMsg===true){
                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+1);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.requote.submitForm();

                }

                   else if(LoginPage.NoAirAv===true){

                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+2);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.btnairRq.click();
                    LoginPage.dptcountry.selectByValue('USA');
                    LoginPage.dptstate.selectByValue('AZ');
                    LoginPage.dptcity.selectByValue('PHX,PHOENIX');
                    LoginPage.requote.submitForm();

                } 


                else if (LoginPage.AirTable===true){
                    return true;
                    } 

        
            });

       LoginPage.submit2.submitForm();



       LoginPage.title.selectByValue('MR');
       LoginPage.gender.selectByValue('M');
       LoginPage.address.setValue('Arizona Street');
       LoginPage.firstName.setValue('Luis');
       LoginPage.lastName.setValue('Honduras');
       LoginPage.city.setValue('Arizona')
       LoginPage.country.selectByValue('USA');
       LoginPage.state.selectByValue('AZ');
       LoginPage.zip.setValue('85001');
       LoginPage.phone.setValue('6025550138');
       LoginPage.email.setValue(//Insert Email);
       LoginPage.birthMonth.selectByValue('5');
       LoginPage.birthDay.selectByValue('20');
       LoginPage.birthYear.selectByValue('1990');
       LoginPage.adult1Title.selectByValue('MRS');
       LoginPage.adult1Name.setValue('Luisa');
       LoginPage.adult1LastName.setValue('Honduras');
       LoginPage.adult1Gender.selectByValue('F');
       LoginPage.adult1BirthMonth.selectByValue('7');
       LoginPage.adult1BirthDay.selectByValue('25');
       LoginPage.adult1BirthYear.selectByValue('1991');
       browser.submitForm('#guestinfoForm');


       LoginPage.ccnumber.setValue(//CARD NUMBER);
       LoginPage.ccname.setValue('Random');
       LoginPage.ccexpiremonth.selectByValue('3');
       LoginPage.ccexpireyear.selectByValue(year+2);
       LoginPage.cvvid.setValue('123');
       LoginPage.ccaddress.setValue('ARIZONA STREET');
       LoginPage.cccountry.selectByValue('USA');
       LoginPage.ccstate.selectByValue('AZ');
       LoginPage.cccity.setValue('ARIZONA');
       LoginPage.cczip.setValue('85001');
       LoginPage.BookingForm.click();
       browser.saveElementScreenshot('shots/Toronto-TestBooking-' +  ip[0] + '.png','.confirmationPageSection');

       }
       


    });



 it('should Make Test Bookings for Vancouver', function() {

        if (month>=9){
            month=1;
            year=year+1;
        } 

        else {
            month=month+3;
        }

        for(var y=0; y < 2; y++) {
            host=hostsVan[Math.floor(Math.random() * hostsVan.length)];
            ip[0]= host.match(/(\d+)(?!.*\d)/g);


        

            LoginPage.open(host);
            LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
            LoginPage.chkinmonth.selectByValue(month);
            LoginPage.chkinday.selectByValue('1');
            LoginPage.chkinyear.selectByValue(year);
            LoginPage.btnair.click();
            LoginPage.dptcountry.selectByValue('USA');
            LoginPage.dptstate.selectByValue('AZ');
            LoginPage.dptcity.selectByValue('PHX,PHOENIX');
            LoginPage.submit.submitForm();
            

             browser.waitUntil(function (){

                if(LoginPage.NoAirMsg===true){
                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+1);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.requote.submitForm();

                }

                   else if(LoginPage.NoAirAv===true){

                    LoginPage.resort.selectByValue(resortArray[Math.floor(Math.random() * resortArray.length)]);
                    LoginPage.chkinmonth.selectByValue(month+2);
                    LoginPage.chkinday.selectByValue('1');
                    LoginPage.chkinyear.selectByValue(year);
                    LoginPage.btnairRq.click();
                    LoginPage.dptcountry.selectByValue('USA');
                    LoginPage.dptstate.selectByValue('AZ');
                    LoginPage.dptcity.selectByValue('PHX,PHOENIX');
                    LoginPage.requote.submitForm();

                } 


                else if (LoginPage.AirTable===true){
                    return true;
                    } 

        
            });

       LoginPage.submit2.submitForm();



       LoginPage.title.selectByValue('MR');
       LoginPage.gender.selectByValue('M');
       LoginPage.address.setValue('Arizona Street');
       LoginPage.firstName.setValue('Luis');
       LoginPage.lastName.setValue('Honduras');
       LoginPage.city.setValue('Arizona');
       LoginPage.country.selectByValue('USA');
       LoginPage.state.selectByValue('AZ');
       LoginPage.zip.setValue('85001');
       LoginPage.phone.setValue('6025550138');
       LoginPage.email.setValue(//insert email);
       LoginPage.birthMonth.selectByValue('5');
       LoginPage.birthDay.selectByValue('20');
       LoginPage.birthYear.selectByValue('1990');
       LoginPage.adult1Title.selectByValue('MRS');
       LoginPage.adult1Name.setValue('Luisa');
       LoginPage.adult1LastName.setValue('Honduras');
       LoginPage.adult1Gender.selectByValue('F');
       LoginPage.adult1BirthMonth.selectByValue('7');
       LoginPage.adult1BirthDay.selectByValue('25');
       LoginPage.adult1BirthYear.selectByValue('1991');
       browser.submitForm('#guestinfoForm');


       LoginPage.ccnumber.setValue(//CARD NUMBER);
       LoginPage.ccname.setValue('Random');
       LoginPage.ccexpiremonth.selectByValue('3');
       LoginPage.ccexpireyear.selectByValue(year+2);
       LoginPage.cvvid.setValue('123');
       LoginPage.ccaddress.setValue('ARIZONA STREET');
       LoginPage.cccountry.selectByValue('USA');
       LoginPage.ccstate.selectByValue('AZ');
       LoginPage.cccity.setValue('ARIZONA');
       LoginPage.cczip.setValue('85001');
       LoginPage.BookingForm.click();
       browser.saveElementScreenshot('shots/Vancouver-TestBooking-' +  ip[0] + '.png','.confirmationPageSection');

      }
       


    });
  


});






