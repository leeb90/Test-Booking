// login.page.js
var Page = require('./Page')
var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
     /*Step1
    */
    resort:     { get: function () { return browser.element('#resortcode'); } },
    chkinmonth: { get: function () { return browser.element('#checkin_month'); } },
    chkinday:   { get: function () { return browser.element('#checkin_day'); } },
    chkinyear:  { get: function () { return browser.element('#checkin_year'); } },
    btnair:     { get: function () { return browser.element('#air_cb_yes'); } },
    dptcountry: { get: function () { return browser.element('#departureCountry'); } },
    dptstate:   { get: function () { return browser.element('#DepartureState'); } },
    dptcity:    { get: function () { return browser.element('#DepartureGateway'); } },
    submit:     { get: function () { return browser.element('#availabiltyForm'); } },

    /*Step2
    */

    waitTable:  { get: function () { return browser.element('#flightGroupsTable'); } },
    AirTable:  { get: function () { return browser.isVisible('#flightGroupsTable'); } },
    NoAirMsg:  { get: function () { return browser.isVisible('#airNoShow'); } },
    NoAirAv:  { get: function () { return browser.isVisible('.fw_messageboxMessage'); } },
    btnairRq:     { get: function () { return browser.element('#air_cb'); } },
     requote:     { get: function () { return browser.element('#requote'); } },
     submit2:     { get: function () { return browser.element('#availabilityForm'); } },


    /*Step3
    */

    title:      { get: function()  {  return browser.element('#title');    } },
    gender:     { get: function()  {  return browser.element('#gender');   } },
    address:    { get: function()  {  return browser.element('#address');  } },
    firstName:  { get: function()  {  return browser.element('#firstname');} },
    city:       { get: function()  {  return browser.element('#city');} },
    lastName:   { get: function()  {  return browser.element('#lastname');} },
    country:    { get: function()  {  return browser.element('#country');} },
    state:      { get: function()  {  return browser.element('#state');} },
    email:      { get: function()  {  return browser.element('#email');} },
    zip:        { get: function()  {  return browser.element('#zip');} },
    birthMonth: { get: function()  {  return browser.element('#birthMonth');} },
    birthDay:   { get: function()  {  return browser.element('#birthDay');} },
    birthYear:  { get: function()  {  return browser.element('#birthYear');} },
    phone:      { get: function()  {  return browser.element('#phone');} },
    adult1Title:{ get: function()  {  return browser.element('#adult1_title');} },
    adult1Name: { get: function()  {  return browser.element('#adult1_firstname');} },
    adult1LastName:  { get: function()  {  return browser.element('#adult1_lastname');} },
    adult1Gender:    { get: function()  {  return browser.element('#adult1_gender');} },
    adult1BirthMonth:{ get: function()  {  return browser.element('#adult1_birthMonth');} },
    adult1BirthDay:  { get: function()  {  return browser.element('#adult1_birthDay');} },
    adult1BirthYear: { get: function()  {  return browser.element('#adult1_birthYear');} },

    //Step4
    ccnumber: {get: function() { return browser.element('#cc_number');}},
    ccname: {get: function()   { return browser.element('#cc_name');}},
    ccnumber: {get: function() { return browser.element('#cc_number');}},
    ccexpiremonth: {get: function() { return browser.element('#expires_month');}},
    ccexpireyear: {get: function()  { return browser.element('#expires_year');}},
    cvvid: {get: function() { return browser.element('#cc_ccvid');}},
    ccaddress: {get: function() { return browser.element('#cc_address');}},
    cccountry: {get: function() { return browser.element('#cc_country');}},
    ccstate: {get: function() { return browser.element('#cc_state');}},
    cccity: {get: function()  { return browser.element('#cc_city');}},
    cczip: {get: function()   { return browser.element('#cc_zip');}},
    ConfNumber: {get: function()  { return browser.isVisible('.confirmationPageSection');}},
    BookingForm: {get: function() { return browser.element('#process-form');}},


    
});
module.exports = LoginPage;