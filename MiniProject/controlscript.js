function beforeSubmit()
{
    //get html element in java script use query locator
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    console.log('inputdate',inputdate.value);
    console.log('inputdate',typeof inputdate.value); //string -->date(en_IN)// system.debug(userinfo.getlocale());//en_US

    let formatedDate = new Date(inputdate.value).toLocaleDateString("en-US");
    console.log('formatedDate',formatedDate);
    outputdate.value = formatedDate;

}
