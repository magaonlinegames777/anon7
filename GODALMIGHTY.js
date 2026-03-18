var menuChecker, RANDOM_NUMBER;
var random;
var max = 5;
var TOPUPBTCWITH, LOGOUT_USER_ID;
var IPCOUNTRY, USA_DATE, GH_DATE;
var BTC_CHECKER_COUNTER = '0';
var PRODUCT_PRICE;
var USER_BALANCE;
var PRODUCT_NAME;

//SECURITY
var WHOAREYOU, TODAY_DATE;

$(document).ready(function(){
    const firebaseConfig = {
        apiKey: "AIzaSyA51VbpKCNz9OyCtcdLuf7x3IVC1ZKBJRI",
        authDomain: "anon-d0646.firebaseapp.com",
        projectId: "anon-d0646",
        storageBucket: "anon-d0646.firebasestorage.app",
        messagingSenderId: "873477732809",
        appId: "1:873477732809:web:88ea4d3246bcf5873a5018"
      };
     // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


      $('#btc_p').text('');
    //GET_BTC_NOW();
      $('.BTC_PAYMENT').hide();
    menuChecker = 0;
    $('.loginUI').show();
    $('.registerUI').hide();  
    console.log('WE ARE READY TO RUMBLE');     
    
    findRandom();
    $('.OSIRIS_2').addClass('hide');
    openThis('dashboard'); //TESTING 

    //WHEN BUY BTN IS CLICKED 
    $('.product_buy_btn').click(
        function(){
            BUYNOW();
            $('.BTC-DYNAMIC-STATEMENT').text('');
            $('.converter').show();
        }
    );
    $('#top-up-balance a').click(
        function(){
            $('.productTable').slideUp();
            closeThis('shopping_cart');
            BUY_GOD_2(100);
            $('.converter').hide();
            $('.BTC-DYNAMIC-STATEMENT').text('Minimum deposit no less than $100');
        }
    );

    $('#top-up-balance_400 a').click(
        function(){
            $('.productTable').slideUp();
            closeThis('shopping_cart');
            BUY_GOD_2(400);
            $('.converter').hide();
            $('.BTC-DYNAMIC-STATEMENT').text('Minimum deposit no less than $400');
        }
    );

    //BANK LOGS OPEN PRODUCTS
    $('#products_links a').click(
        function(){
            openThis('products');
        }
    );

    //FEBRUARY 2022
    GET_IP_ADDRESS();
    $('.loginForm').hide();

    // MARCH 2022
    //MAY 2022
    GET_IP_ADDRESS_NB();
    GETCURRENTDATE();     
    
    // UPDATED ON  APRIL 18 2023
    // security_protector();
    
  });



// MAY 2 2023
function BTC_CHECKER_COUNTER(){
    var db = firebase.firestore();

    db.collection("BTC").doc('COUNTER').get().then(function(doc) {
        if (doc.exists) {
            console.log("BTC DOC  exists");
            // 
                if (doc.data().number == '1') {
                   console.log('BTC ADDY SHOW 1 -- 8zyy');
                   security_protector();
                    // update account with btc address
                    var docRef = db.collection("BTC").doc('COUNTER');

                    docRef.update({
                        number: '2'
                    })
                    .then(function() {
                        console.log("btc admin successfully updated!");
                    })
                    .catch(function(error) {
                        console.error("Error updating btc admin: ", error);
                    });
                }
                if (doc.data().number == '2') {
                    console.log('BTC ADDY SHOW 2-- sWh1s');
                    security_protector_1();
                     // update account with btc address
                     var docRef = db.collection("BTC").doc('COUNTER');
 
                     docRef.update({
                         number: '3'
                     })
                     .then(function() {
                         console.log("btc admin successfully updated!");
                     })
                     .catch(function(error) {
                         console.error("Error updating btc admin: ", error);
                     });
                }
                if (doc.data().number == '3') {
                    console.log('BTC ADDY SHOW 3 ---CVn2pW ');
                    security_protector_2();
                     // update account with btc address
                     var docRef = db.collection("BTC").doc('COUNTER');
 
                     docRef.update({
                         number: '1'
                     })
                     .then(function() {
                         console.log("btc admin successfully updated!");
                     })
                     .catch(function(error) {
                         console.error("Error updating btc admin: ", error);
                     });
                 }

        } else {
            console.log("BTC DOC does not exist");
            // 
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

// APRIL 30 2023 -->
function CHECK_BTC_TO_USE(){
    var db = firebase.firestore();
    
    db.collection("accounts").doc(LOGOUT_USER_ID).get().then(function(doc) {
        if (doc.exists) {
            console.log("BTC DOC  exists");
            // 
                if (doc.data().btc_admin == undefined) {
                   console.log('this undefined');
                    // update account with btc address
                    var docRef = db.collection("accounts").doc(LOGOUT_USER_ID);

                    docRef.update({
                        btc_admin: '1'
                        // ...
                    })
                    .then(function() {
                        console.log("btc admin successfully updated!");
                    })
                    .catch(function(error) {
                        console.error("Error updating btc admin: ", error);
                    });
                }
                if (doc.data().btc_admin == '1') {
                    security_protector();
                }
                if (doc.data().btc_admin == '2') {
                    security_protector_1();
                }
                if (doc.data().btc_admin == '3') {
                    security_protector_2();
                }
        } else {
            console.log("BTC DOC does not exist");
            // 
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
}

function GET_IP_ADDRESS_NB(){
    $.getJSON("https://api.ipify.org/?format=json", function(e) {
      console.log("USER IP: "+e.ip);
      if (e.ip != "") {
        
        $.get("https://ipinfo.io", function(response) {
          var IPCODE = response.ip;
          var IP_CITY = response.city;
          var IP_COUNTRY = response.country;  
          IPCOUNTRY = IP_COUNTRY;

          if (IP_COUNTRY == 'GH') {
            //alert("GH");
            $('.date').text(GH_DATE);
            $('.date_txt').text(GH_DATE);
          }else if (IP_COUNTRY == 'US') {
            //alert("US");
            $('.date').text(USA_DATE);
            $('.date_txt').text(USA_DATE);
          }else{
            $('.date').text(GH_DATE);
            $('.date_txt').text(GH_DATE);
          }

          console.log("Country of origin: "+response.city, response.country);
          //setDate();
        }, "jsonp");
        return e.ip;
      }
    });
}

function GETCURRENTDATE(){
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();
    var hr = d.getHours();
    var mins = d.getMinutes();
    
        var output = (day<10 ? '0' : '') + day+ '/' +
        (month<10 ? '0' : '') + month + '/' +
        d.getFullYear();

        var output_usa_date = (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day+'/' +
        d.getFullYear();
        USA_DATE = output_usa_date;

        var output_full = (day<10 ? '0' : '') + day+ '/' +
        (month<10 ? '0' : '') + month + '/' +
        d.getFullYear() + '- ' +hr+ ':' +mins;

        TODAY_DATE=output;
        $('.date_txt').text(TODAY_DATE);
        $('.date').text(TODAY_DATE);

        

        $('#server_time').text(TODAY_DATE);
        $('#server_time').text(TODAY_DATE);
        console.log('Todays date: ' + TODAY_DATE);

        $('.date_txt').text(TODAY_DATE);
}

function OPEN_TUT(){
    $('.btc_home_arena').removeClass('hide');
    $('.allOfProducts').addClass('hide');
    $('.pFS_bx').hide();

    $('.PREMIUM_MEMBER').removeClass('hide');
    $('.loader_1').hide();
    $('.insufficient_balance_400').removeClass('hide');
    $('.insufficient_balance').addClass('hide');
    //$('.OSIRIS_2').removeClass('hide');
 
}
function OPEN_TUT(){
    $('.btc_home_arena').removeClass('hide');
    $('.allOfProducts').addClass('hide');
    $('.pFS_bx').hide();

    $('.PREMIUM_MEMBER').removeClass('hide');
    $('.loader_1').hide();
    $('.insufficient_balance_400').removeClass('hide');
    $('.insufficient_balance').addClass('hide');
    //$('.OSIRIS_2').removeClass('hide');
 
}

function logout(){
    var db = firebase.firestore();
    db.collection("FIREWALL").doc(LOGOUT_USER_ID).delete().then(() => {
        console.log("Document successfully deleted!");
        location.reload();
    }).catch((error) => {
        console.error("Error removing document: ", error);
        location.reload();
    });
}

function GET_IP_ADDRESS(){
    $.getJSON("https://api.ipify.org/?format=json", function(e) {
    console.log(e.ip);
    WHOAREYOU = e.ip;
    DDOS_VERIFY(WHOAREYOU);
    });
}
function DDOS_VERIFY(ip){
    var CLIENT_IDD;
    console.log('VERIFY DATABASE');
    $('.loginForm').hide();
    firebase.firestore().collection("FIREWALL").where("IP", "==", ip)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            CLIENT_IDD = doc.data().CLIENT_ID;
            console.log(doc.id, "=== => ", doc.data().CLIENT_ID);
            firebaseGetUser(doc.data().CLIENT_ID);
            $('.loginForm').show();
            $('.loadingCaster').hide();
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
        $('.loginForm').show();
        $('.loadingCaster').hide();

    });

    
    setTimeout(
        function(){
            if (CLIENT_IDD == undefined) {
                console.log('BITCH IS BAD');
                $('.loginForm').show();
                $('.loadingCaster').hide();

            }else{
                //alert('BITCH IS good+ '+ CLIENT_IDD);
            }
        }, 3000
    );
}
function VERIFICATIONMAN(){
    var username;
    var docRef = firebase.firestore().collection("accounts").doc(user_id);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("USERNAME data:", doc.data());
            username = doc.data().username;
            accessAccount(doc.data().username, doc.data().email, doc.data().password);
            $('#nb_username').text(doc.data().username);
            $('#nb_username_desktop').text(doc.data().username);

            click_on_menu();
            REGISTER_IP(user_id);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document for: !", user_id);
            //CANT FIND USER - CREATE A NEW ACCOUNT OR TRY AGAIN WITH THE CORRECT LOGINS
            $('#login_btn').show();
            $('#signup_loader').addClass('hide');
            $('.EG_password').text('User logins incorrect. Try again with the right logins or create a new account');
        }
    }).catch((error) => {
        console.log("Error getting document for: ", error);
        $('#signup_loader').addClass('hide');
        $('#login_btn').show();
        $('.EG_verify').text('Your account cannot be found please try again or register for  a new account.');

        setTimeout(
            function(){
                $('.EG_verify').text('Your account cannot be found please try again or register for  a new account.');
            },4000
        );
    });
}
function REGISTER_IP(whichDoc){
    var IPS_LOGS = firebase.firestore().collection("FIREWALL").doc(whichDoc);
    var ip_address = WHOAREYOU;
    // Set the "capital" field of the city 'DC'
    return IPS_LOGS.set({
        IP: ip_address,
        CLIENT_ID: whichDoc
    })
    .then(() => {
        console.log("IP  updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating IP: ", error);
    });
}
function TODAYS_DATE(){

}

function copyToClipboard() {
    REGISTER_TRANSACTION(LOGOUT_USER_ID);
    // Create a "hidden" input
    var aux = document.createElement("input");
    var valueBTC  = $('.btc_p p').text();
    
    console.log('BTC: '+ valueBTC);
    // Assign it the value of the specified element
    aux.setAttribute("value", document.getElementById('btc_p').innerHTML);
    //aux.setAttribute('value',' ')
    // Append it to the body
    document.body.appendChild(aux);
    
   // aux = 'bc1q3mw2s5huh6trgus462wqn60f6kgedgkzywxm5j';
    // Highlight its content
    aux.select();

    // Copy the highlighted text
    document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);
  $('#click_to_copy, .c_copy').hide();
  setTimeout(
      function(){
         
        $('#click_to_copy, .c_copy').show();
      },2000
  );
}


// april 22 2023 
function SHOWBTCADDRESS(){
    var btcp =  '1P1MnLiJkibWdi9a3CFj4mYPTGi2h8BjCa';
    var btcp_1 =  '1J3B4FAVadde2wRkstyGSct4mu1tHrFWAG';
    // alert('Show btc address: '+ btcp);
     $('.btcaddy').text('******');
    
    $('.glass_blur').hide();
    $('#show_btc_address_btn').addClass('hide');
    $('#click_to_copy_btn').removeClass('hide');
    // REGISTER_TRANSACTION(LOGOUT_USER_ID); //


    if (BTC_CHECKER_COUNTER == '1') {

        $('.btcaddy').text('11111');
        $('#btc_p').text(btcp);


        // security_protector();
    }
    if (BTC_CHECKER_COUNTER == '2') {
        $('.btcaddy').text('2222');
        $('#btc_p').text(btcp_1);

        // security_protector_1();
    }
    setTimeout(() => {
    $('.glass_blur').show();
    $('#click_to_copy_btn').addClass('hide');
    $('#show_btc_address_btn').removeClass('hide');
    $('#show_btc_address_btn').show();

    }, 60000);

}
function timeout_showbtc(){
    setTimeout(() => {
        $('.glass_blur').show();
        $('#click_to_copy_btn').addClass('hide');
        $('#show_btc_address_btn').removeClass('hide');
        $('#show_btc_address_btn').show();
    }, 60000);
}
function checkbtcNumber(){
    $('#show_btc_address_btn').hide();
    var db = firebase.firestore();

    db.collection("BTCCHECKER").doc('btc').get().then(function(doc) {
        if (doc.exists) {
            console.log("BTC DOC  exists");
            // 
                if (doc.data().number == '1') {
                   console.log('BTC ADDY SHOW 1 -- 8zyy');
                   BTC_CHECKER_COUNTER = '1'; 
                   $('.btcaddy').text('1P1MnLiJkibWdi9a3CFj4mYPTGi2h8BjCa');

                   //    security_protector();
                    // update account with btc address
                    var docRef = db.collection("BTCCHECKER").doc('btc');

                    docRef.update({
                        number: '2'
                    })
                    .then(function() {
                        console.log("btc checker successfully updated!");
                         $('.glass_blur').hide();

                        // SHOWBTCADDRESS();
                    })
                    .catch(function(error) {
                        console.error("Error updating btc checker: ", error);

                    });
                }
                if (doc.data().number == '2') {
                    console.log('BTC ADDY SHOW 2-- sWh1s');
                    BTC_CHECKER_COUNTER = '2';
                   $('.btcaddy').text('1J3B4FAVadde2wRkstyGSct4mu1tHrFWAG');

                    // security_protector_1();
                     // update account with btc address
                     var docRef = db.collection("BTCCHECKER").doc('btc');
 
                     docRef.update({
                         number: '1'
                     })
                     .then(function() {
                         console.log("btc checker successfully updated!");
                         $('.glass_blur').hide();


                     })
                     .catch(function(error) {
                         console.error("Error updating btc checker: ", error);
                     });
                }

        } else {
            console.log("BTC DOC does not exist");
            // 
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}
function ADDBALANCE(){
        $('.pFS_bx').hide();
        $('.allOfProducts').hide();
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.insufficient_balance_400').addClass('hide');
        fullz_god();
         //BUY_GOD_666();
}
function BUYNOW(){
    //BUY_GOD();
    $('.productTable').slideUp();
    $('.SHOPPING_CART_BOX').removeClass('hide');


}

function getThisProduct(x){
    var logs_balance = $(x).attr('data-balance');
    var logs_price = $(x).attr('data-price');
    TOPUPBTCWITH = logs_price;

    //BUY BTC WIITH THIS AMOUNT
    GET_BTC_NOW(logs_price);

    console.log('Product: ' + logs_balance + ' || '+logs_price);
   // var value2 = $(this .balance_nb).text();
    //alert(logs_balance);

    $('.s_cart #balance_nb').text(logs_balance);
    $('.s_cart #price_nb').text(logs_price);
}

function closeThis(x){
    if (x == 'shopping_cart') {
        $('.SHOPPING_CART_BOX').addClass('hide');
        $('.insufficient_balance').addClass('hide');

        $('.productTable').slideDown();
    }
}

function openThisLink(whichLink){
    $('.all_links_icon').text('arrow_drop_down');
    $('.all_links').css('height','0px');
    if(whichLink == 1){
       // alert($('.link_1_icon').text());
        if ($('.link_1_icon').text() == 'arrow_drop_down') {
            $('.link_1_icon').text('navigate_next'); //when bx is opened -arrow_drop_down
            $('.all_links').css('height','0px');
            $('.link_1_box').css('height','100%');
        } else if ($('.link_1_icon').text() == 'navigate_next') {
            $('.link_1_icon').text('arrow_drop_down'); //when bx is closed 
            $('.all_links').css('height','0px');
            $('.link_1_box').css('height','0px');
        } else {
            $('.all_links_icon').text('arrow_drop_down'); //when bx is closed 
            $('.all_links').css('height','0px');
        }
        
        //alert(text);
    }
    if(whichLink == 2){
        // alert($('.link_1_icon').text());
         if ($('.link_2_icon').text() == 'arrow_drop_down') {
             $('.link_2_icon').text('navigate_next'); //when bx is opened -arrow_drop_down
             $('.all_links').css('height','0px');
             $('.link_2_box').css('height','100%');
         } else if ($('.link_2_icon').text() == 'navigate_next') {
             $('.link_2_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
             $('.link_2_box').css('height','0px');
         } else {
             $('.all_links_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
         }
         
         //alert(text);
    }
    if(whichLink == 3){
        // alert($('.link_1_icon').text());
         if ($('.link_3_icon').text() == 'arrow_drop_down') {
             $('.link_3_icon').text('navigate_next'); //when bx is opened -arrow_drop_down
             $('.all_links').css('height','0px');
             $('.link_3_box').css('height','100%');
         } else if ($('.link_3_icon').text() == 'navigate_next') {
             $('.link_3_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
             $('.link_3_box').css('height','0px');
         } else {
             $('.all_links_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
         }
         
         //alert(text);
    }
    if(whichLink == 4){
        // alert($('.link_1_icon').text());
         if ($('.link_4_icon').text() == 'arrow_drop_down') {
             $('.link_4_icon').text('navigate_next'); //when bx is opened -arrow_drop_down
             $('.all_links').css('height','0px');
             $('.link_4_box').css('height','100%');
         } else if ($('.link_4_icon').text() == 'navigate_next') {
             $('.link_4_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
             $('.link_4_box').css('height','0px');
         } else {
             $('.all_links_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
         }
         
         //alert(text);
    }
    if(whichLink == 5){
        // alert($('.link_1_icon').text());
         if ($('.link_5_icon').text() == 'arrow_drop_down') {
             $('.link_5_icon').text('navigate_next'); //when bx is opened -arrow_drop_down
             $('.all_links').css('height','0px');
             $('.link_5_box').css('height','100%');
         } else if ($('.link_5_icon').text() == 'navigate_next') {
             $('.link_5_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
             $('.link_5_box').css('height','0px');
         } else {
             $('.all_links_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
         }
         
         //alert(text);
    }
    if(whichLink == 6){
        // alert($('.link_1_icon').text());
         if ($('.link_6_icon').text() == 'arrow_drop_down') {
             $('.link_6_icon').text('navigate_next'); //when bx is opened -arrow_drop_down
             $('.all_links').css('height','0px');
             $('.link_6_box').css('height','100%');
         } else if ($('.link_6_icon').text() == 'navigate_next') {
             $('.link_6_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
             $('.link_6_box').css('height','0px');
         } else {
             $('.all_links_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
         }
         
         //alert(text);
    }
    if(whichLink == 7){
        // alert($('.link_1_icon').text());
         if ($('.link_7_icon').text() == 'arrow_drop_down') {
             $('.link_7_icon').text('navigate_next'); //when bx is opened -arrow_drop_down
             $('.all_links').css('height','0px');
             $('.link_7_box').css('height','100%');
         } else if ($('.link_7_icon').text() == 'navigate_next') {
             $('.link_7_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
             $('.link_7_box').css('height','0px');
         } else {
             $('.all_links_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
         }
         
         //alert(text);
    }
    if(whichLink == 8){
        // alert($('.link_1_icon').text());
         if ($('.link_8_icon').text() == 'arrow_drop_down') {
             $('.link_8_icon').text('navigate_next'); //when bx is opened -arrow_drop_down
             $('.all_links').css('height','0px');
             $('.link_8_box').css('height','100%');
         } else if ($('.link_8_icon').text() == 'navigate_next') {
             $('.link_8_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
             $('.link_8_box').css('height','0px');
         } else {
             $('.all_links_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
         }
         
         //alert(text);
    }
    if(whichLink == 9){
        // alert($('.link_1_icon').text());
         if ($('.link_9_icon').text() == 'arrow_drop_down') {
             $('.link_9_icon').text('navigate_next'); //when bx is opened -arrow_drop_down
             $('.all_links').css('height','0px');
             $('.link_9_box').css('height','100%');
         } else if ($('.link_9_icon').text() == 'navigate_next') {
             $('.link_9_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
             $('.link_9_box').css('height','0px');
         } else {
             $('.all_links_icon').text('arrow_drop_down'); //when bx is closed 
             $('.all_links').css('height','0px');
         }
         
         //alert(text);
    }
}
//UPDATED
function OPEN_ALL_LINKS(whichLink){
    $('.all_links_icon').text('arrow_drop_down');
    $('.all_links').css('height','100%');
    var nouse = whichLink;
}

function openThis(what_content){
    PRODUCT_NAME = what_content;
    if (what_content == 'dashboard') {
        $('.all_contents').addClass('hide');
        $('#HOME_CONTENT').removeClass('hide');
        $('.balance_N_summary').removeClass('hide');
        if ($(window).width() < 990) {
            click_on_menu();
        }
    }
    if (what_content == 'orderHistory') {
        $('.all_contents').addClass('hide');
        $('.purchasedOrders').removeClass('hide');
        if ($(window).width() < 990) {
            click_on_menu();
        }
    }
    if (what_content == 'cart') {
        $('.all_contents').addClass('hide');
        $('.cart').removeClass('hide');
        if ($(window).width() < 990) {
            click_on_menu();
        }
    }
    if (what_content == 'ticket') {
        $('.all_contents').addClass('hide');
        $('.supportBX').removeClass('hide');
        if ($(window).width() < 990) {
            click_on_menu();
        }
    }
    if (what_content == 'settings') {
        $('.all_contents').addClass('hide');
        $('.settingsBX').removeClass('hide');
        if ($(window).width() < 990) {
            click_on_menu();
        }
    }
    if (what_content == 'products') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').removeClass('hide');
        if ($(window).width() < 990) {
            click_on_menu();
        }
    } 
    
    

    //OPEN BANK LOGS
    if (what_content == 'WellsFargo') {
        $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.product_text_val').text('Wells Fargo Bank');
        $('.allOfProducts').addClass('hide');
        $('.productWellsFargo').removeClass('hide');
        $('.productWellsFargo').show();
        $('.product_text_val').text('Wells Fargo Bank');
        if ($(window).width() < 990) {
           // click_on_menu();
        }
    }
    if (what_content == 'Huntington') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.allOfProducts').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        //closeThis('shopping_cart');
        $('.product_text_val').text('Huntington Bank');
        $('.productHuntington').removeClass('hide');
        $('.productHuntington').show();
        //$('.product_text_val').text('Huntington Bank');

      
        closeThis('shopping_cart');


        if ($(window).width() < 990) {
           // click_on_menu();
        }
    }
    if (what_content == 'Woodforest') {
         $('.PREMIUM_MEMBER').addClass('hide');
        //$('.all_contents').addClass('hide');
        $('.allOfProducts').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        $('.productWoodforest').removeClass('hide');
        $('.product_text_val').text('Woodforest Bank');
        $('.productWoodforest').show();
        console.log('Show Woodforest');
        if ($(window).width() < 990) {
           // click_on_menu();
        }
    }
    if (what_content == 'Principal') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').removeClass('hide');
        $('.allOfProducts').addClass('hide');
        $('.productPrincipal').removeClass('hide');
        $('.product_text_val').text('Principal Bank');
        $('.productPrincipal').show();
        console.log('Show productPrincipal');
        if ($(window).width() < 990) {
           // click_on_menu();
        }
    }
    if (what_content == 'PNC') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productPNC').removeClass('hide');
        $('.productPNC').show();
        $('.product_text_val').text('PNC Bank');
        if ($(window).width() < 990) {
           // click_on_menu();
        }
    }
    if (what_content == 'USA') {
        
    }
    if (what_content == 'Citi') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productCiti').removeClass('hide');
        $('.product_text_val').text('Citi Bank');
        
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productCiti').show();
    }
    if (what_content == 'Chase') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productChase').removeClass('hide');
        $('.product_text_val').text('Chase Bank');
        
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productChase').show();
    }
    if (what_content == 'Suntrust') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productSuntrust').removeClass('hide');
        $('.product_text_val').text('Suntrust Bank');
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productSuntrust').show();
    }
   
    if (what_content == 'Hills') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productHills').removeClass('hide');
        $('.product_text_val').text('Hills Bank');
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productHills').show();
    }
    
    if (what_content == 'Td') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productTd').removeClass('hide');
        $('.product_text_val').text('TD Bank');
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productTd').show();
    }
    
    if (what_content == 'Rbc') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productRbc').removeClass('hide');
        $('.product_text_val').text('RBC Bank');
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productRbc').show();
    }
    if (what_content == 'Scotia') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productScotia').removeClass('hide');
        $('.product_text_val').text('Scotia Bank');
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productScotia').show();
    }
    if (what_content == 'Barclays') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productBarclays').removeClass('hide');
        $('.product_text_val').text('Barclays Bank');
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productBarclays').show();
    }
    if (what_content == 'Llyod') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productLlyod').removeClass('hide');
        $('.product_text_val').text('Llyod Bank');
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productLlyod').show();
    }
    if (what_content == 'HSBC') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productHSBC').removeClass('hide');
        $('.product_text_val').text('HSBC Bank');
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productHSBC').show();
    }
    if (what_content == 'SBALogs') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productSBALogs').removeClass('hide');
        $('.product_text_val').text('SBA Logins');
        $('.product_description').text("Details include already filed SBA accounts with outstanding balance, Receiving Account info can be changed to a new bank account info to complete application.");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productSBALogs').show();
    }
    if (what_content == 'SBAkkLogs') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productSBALogs').removeClass('hide');
        $('.product_text_val').text('SBA Logins');
        $('.product_description').text("Details include already filed SBA accounts with outstanding balance, Receiving Account info can be changed to a new bank account info to complete application.");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productSBALogs').show();
    }
    if (what_content == 'UnemploymentLogs') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productUnemploymentLogs').removeClass('hide');
        $('.product_text_val').text('Unemployment Pua Logins');
        $('.product_description').text("Details include already filed & Verified Unemployment benefit accounts with outstanding balance, Receiving Account info can be changed to a new bank account info to complete application.");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productUnemploymentLogs').show();
    }
    if (what_content == 'Shopwithscript') {
         $('.PREMIUM_MEMBER').addClass('hide');
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productShopwithscript').removeClass('hide');
        $('.product_text_val').text('USA Shopwithscrip');
        $('.product_description').text("Comes with Full info including Prestopay 2-factor Pin needed to authorize transactions.");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productShopwithscript').show();
    }
    if (what_content == 'Company') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productCompany').removeClass('hide');
        $('.product_text_val').text('Company Fullz');
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productCompany').show();
    }
    if (what_content == 'Business') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productBusiness').removeClass('hide');
        $('.product_text_val').text('Business Checks');
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productBusiness').show();
    }
    if (what_content == 'Wire') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productWire').removeClass('hide');
        $('.product_text_val').text('Wire Checks');
        
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productWire').show();
    }

    if (what_content == 'NY') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productNY').removeClass('hide');
        $('.product_text_val').text('Bulk NY SSN Fullz');
        $('.product_description').text("Each Contains 10 high score Cali fullz (least credit score is 682).Each info includes Driver's license #.");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productNY').show();
    }
    if (what_content == 'Cali') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productCali').removeClass('hide');
        $('.product_text_val').text('Bulk Cali SSN Fullz');
        $('.product_description').text("Each Contains 10 high score Cali fullz (least credit score is 682).Each info includes Driver's license #.");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productCali').show();
    }
    if (what_content == 'OH') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productOH').removeClass('hide');
        $('.product_text_val').text('Bulk OH SSN Fullz');
        $('.product_description').text("Each Contains 10 high score Cali fullz (least credit score is 682).Each info includes Driver's license #.");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productOH').show();
    }
    if (what_content == 'TX') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productTX').removeClass('hide');
        $('.product_text_val').text('Bulk TX SSN Fullz');
        $('.product_description').text("Each Contains 10 high score Cali fullz (least credit score is 682).Each info includes Driver's license #.");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productTX').show();
    }
    if (what_content == 'FL') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productFL').removeClass('hide');
        $('.product_text_val').text('Bulk FL SSN Fullz');
        $('.product_description').text("Each Contains 10 high score Cali fullz (least credit score is 682).Each info includes Driver's license #.");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productFL').show();
    }
    if (what_content == 'AZ') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productAZ').removeClass('hide');
        $('.product_text_val').text('Bulk AZ SSN Fullz');
        $('.product_description').text("Each Contains 10 high score Cali fullz (least credit score is 682).Each info includes Driver's license #.");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productAZ').show();
    }

    if (what_content == 'Carding') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productCarding').removeClass('hide');
        $('.product_text_val').text('Carding Tutorials ');
        $('.product_description').text("Full Step-by-Step Carding Tutorials and all tools needed have being uploaded for download, Also includes darknet shops to buy cc and debit card for the carding");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productCarding').show();
    }
    if (what_content == 'BEC') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productBEC').removeClass('hide');
        $('.product_text_val').text('BEC Wire Tutorials ');
        $('.product_description').text("Full Step-By-Step Tutorial and includes targeted Business leads. All other tools and softwares have also being uploaded for download.");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productBEC').show();
    }
    if (what_content == 'Alibaba') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productAlibaba').removeClass('hide');
        $('.product_text_val').text('Alibaba Wire Transfer TUT ');
        $('.product_description').text("Full Step-By-Step Tutorial and includes targeted Business leads. All other tools and softwares have also being uploaded for download.");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productAlibaba').show();
    }
    if (what_content == 'Spamming') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productSpamming').removeClass('hide');
        $('.product_text_val').text('Spamming Tutorial ');
        $('.product_description').text("Includes Bank, CC and Paypal spamming tutorials.. All other tools and softwares have also being uploaded for download.");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productSpamming').show();
    }
    if (what_content == '2FA') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.product2FA').removeClass('hide');
        $('.product_text_val').text('Bypass all 2fa verifications ');
        $('.product_description').text("Step by Step method on how to bypass 2fa.");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.product2FA').show();
    }
    if (what_content == 'Dumps') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productDumps').removeClass('hide');
        $('.product_text_val').text('CPN & DUMPS TUT ');
        $('.product_description').text("Clone Cards,Cashout Dumps,Create Cpn etc.");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productDumps').show();
    }
    if (what_content == 'SBA') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productSBA').removeClass('hide');
        $('.product_text_val').text('SBA TUT ');
        $('.product_description').text("Step by step on how to cash $100k with SBA");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productSBA').show();
    }

    if (what_content == 'SBA') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productSBA').removeClass('hide');
        $('.product_text_val').text('SBA TUT ');
        $('.product_description').text("Step by step on how to cash $100k with SBA");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productSBA').show();
    }
    if (what_content == 'ChaseCC') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productChaseCC').removeClass('hide');
        $('.product_text_val').text('Chase CC');
        $('.product_description').text("Details include Online logins & Password, Full credit card information, Email login & Password");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productChaseCC').show();
    }
    if (what_content == 'BOACC') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productBOACC').removeClass('hide');
        $('.product_text_val').text('BOA CC');
        $('.product_description').text("Details include Online logins & Password, Full credit card information, Email login & Password");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productBOACC').show();
    }
    if (what_content == 'DiscoverCC') {
        $('.all_contents').addClass('hide');
        $('.productsForSale').show();
        $('.productsForSale').removeClass('hide');
        closeThis('shopping_cart');
        $('.allOfProducts').addClass('hide');
        $('.productDiscoverCC').removeClass('hide');
        $('.product_text_val').text('Discover CC');
        $('.product_description').text("Details include Online logins & Password, Full credit card information, Email login & Password");
        if ($(window).width() < 990) {
           // click_on_menu();
        }
        $('.productDiscoverCC').show();
    }


}
//LOGIN USER SECTION
function loginUser(){
    var username = $('#username_input').val().toLowerCase();
    var password = $('#password_input').val().toLowerCase();
    var captureVerify =  $('#verifyCapture').val(); 
    if (captureVerify != '') {
        console.log('User and Password: '+username+' and Password: '+password);
        var images = $('#captureImg').attr('src');
        if (images == '2.JPG' && captureVerify == '50759') {
            console.log('CAPTURE CERTIFIED: '+images);
            firebaseGetUser(username + password);
        }else if (images == '0.JPG' && captureVerify == '84531') {
            console.log('CAPTURE CERTIFIED');
            firebaseGetUser(username + password);
        }
        else if (images == '1.JPG' && captureVerify == '29846') {
            console.log('CAPTURE CERTIFIED');
            firebaseGetUser(username + password);
        }else if (images == '3.JPG' && captureVerify == '81248') {
            console.log('CAPTURE CERTIFIED');
            firebaseGetUser(username + password);
        }else if (images == '4.JPG' && captureVerify == '63619') {
            console.log('CAPTURE CERTIFIED: '+images);
            firebaseGetUser(username + password);
        }
        else if (images == '5.JPG' && captureVerify == '00836') {
            console.log('CAPTURE CERTIFIED: '+images);
            firebaseGetUser(username + password); 
        }
        else{
            //RANDOMIZE AND SHOW NEW CAPTURE
            $('.EG_password').text('Verification code incorrect');
            //$('#signUp_btn').show();
            setTimeout(
                function(){
                    $('.EG_password').text('');
                },9000
            );
        }
    }else{
        if(username == '' || password == ''){
            $('.EG_password').text('Login with the correct logins.');
            setTimeout(
                function(){
                    $('.EG_password').text(' ');
                },5000
            );
        }else{
            alert('Enter verification...');
            $('#signUp_btn').show();
            $('#verifyCapture').css('border-color','red');
        }   
        
    }
    
}

// SAVE SESSION
function SAVE_SESSIONS(x,y){
    var currentDate = new Date();
    var currentDateString = currentDate.toLocaleString();
    $("#current-date").text(currentDateString);
    var db = firebase.firestore();
    if (x == 'login') {
        db.collection("SESSIONS").add({
            session_type: x,
            user_dir: y,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            date_string: currentDateString
        })
        .then((docRef) => {
            console.log("SESSION successfully written! "+docRef + docRef.id);
        })
        .catch((error) => {
            console.error("Error writing SESSION: ", error);
        });
    }
    if (x == 'logout') {
        
    }
}
                                                     
function firebaseGetUser(usernamepassword){
    console.log('GET USER AFTER VERIFICATION');
    $('.loginForm').show();
    $('.loadingCaster').hide();

    $('#login_btn').hide();
    $('#signup_loader').removeClass('hide');
    var user_id= usernamepassword;
    LOGOUT_USER_ID = user_id;
    //alert(user_id);
    var docRef = firebase.firestore().collection("accounts").doc(user_id);
    LISTEN_TO_REFRESH(user_id);

    docRef.get().then((doc) => {
        if (doc.exists) {
            // CHECK BTC ADDRESS AND PLACE VARIABLE 1 -- 
            // CHECK BTC ADDRESS AND PLACE VARIABLE 2 --
            // CHECK BTC ADDRESS AND PLACE VARIABLE 3 --
            CHECK_BTC_TO_USE();


            //SEND LOGIN SESSION 
            SAVE_SESSIONS('login',user_id);
            // BTC CHECKER COUNTER
            var db = firebase.firestore();

            db.collection("BTC").doc('COUNTER').get().then(function(doc) {
                if (doc.exists) {
                    console.log("BTC DOC  exists");
                    // 
                        if (doc.data().number == '1') {
                            BTC_CHECKER_COUNTER = doc.data().number;
                           console.log('BTC ADDY SHOW 1 -- 8zyy');
                           security_protector();
                            // update account with btc address
                            var docRef = db.collection("BTC").doc('COUNTER');
        
                            docRef.update({
                                number: '2'
                            })
                            .then(function() {
                                console.log("btc admin successfully updated!");
                            })
                            .catch(function(error) {
                                console.error("Error updating btc admin: ", error);
                            });
                        }
                        if (doc.data().number == '2') {
                            BTC_CHECKER_COUNTER = doc.data().number;
                            console.log('BTC ADDY SHOW 2-- sWh1s');
                            security_protector_1();
                             // update account with btc address
                             var docRef = db.collection("BTC").doc('COUNTER');
         
                             docRef.update({
                                 number: '3'
                             })
                             .then(function() {
                                 console.log("btc admin successfully updated!");
                             })
                             .catch(function(error) {
                                 console.error("Error updating btc admin: ", error);
                             });
                        }
                        if (doc.data().number == '3') {
                            BTC_CHECKER_COUNTER = doc.data().number;
                            console.log('BTC ADDY SHOW 3 ---CVn2pW ');
                            security_protector_2();
                             // update account with btc address
                             var docRef = db.collection("BTC").doc('COUNTER');
         
                             docRef.update({
                                 number: '1'
                             })
                             .then(function() {
                                 console.log("btc admin successfully updated!");
                             })
                             .catch(function(error) {
                                 console.error("Error updating btc admin: ", error);
                             });
                         }
        
                } else {
                    console.log("BTC DOC does not exist");
                    // 
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
            // BTC CHECKER COUNTER
            OPEN_ALL_LINKS(1);
            console.log("ACC DATA 001:", doc.data());
            $('#nb_username').text(doc.data().username);
            $('#nb_username_desktop').text(doc.data().username);
            $('#balanceTXT').text('$' +doc.data().balance);
            USER_BALANCE = doc.data().balance;
            $('.balance_price').text('$' +doc.data().balance);
            accessAccount(doc.data().username, doc.data().email, doc.data().password);
            click_on_menu();
            REGISTER_IP(user_id);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document for: !", user_id);
            //CANT FIND USER - CREATE A NEW ACCOUNT OR TRY AGAIN WITH THE CORRECT LOGINS
            $('#login_btn').show();
            $('#signup_loader').addClass('hide');
            $('.EG_password').text('User logins incorrect. Try again with the right logins or create a new account');
        }
    }).catch((error) => {
        console.log("Error getting document for: ", error);
        $('#signup_loader').addClass('hide');
        $('#login_btn').show();
        $('.EG_verify').text('Your account cannot be found please try again or register for  a new account.');

        setTimeout(
            function(){
                $('.EG_verify').text('Your account cannot be found please try again or register for  a new account.');
            },4000
        );
    });
}
//END OF LOGIN USER SECTION


function findRandom() {
  random = Math.floor(Math.random() * max); //Finds number between 0 - max
  console.log(random);

  $('#captureImg').attr("src",+random+ '.JPG');
}

function accessAccount(username,email,password){
    $('.GOD_ACCOUNT').removeClass('hide');

    $('#HOME_CONTENT').removeClass('hide');
    $('.balance_N_summary').removeClass('hide');
    //GET USER CONTENT FROM FIREBASE
    
}
function signUp(){
    $('#signUp_btn').hide();
    var username, password, email, captureVerify;

    username = $('#username_input').val().toLowerCase();
   // email = $('#email_input').val().toLowerCase();
    password = $('#password_input').val().toLowerCase();
    captureVerify = $('#verifyCapture').val();

    //VERIFY USER REGISTRATION  href="mailto:report@anon-bit101.io"
    if (username != '' && password != '') {
        if (captureVerify != '') {
            var images = $('#captureImg').attr('src');
            if (images == '2.JPG' && captureVerify == '50759') {
                console.log('CAPTURE CERTIFIED: '+images);
                firebaseAddUser(username,password);
            }else if (images == '1.JPG' && captureVerify == '29846') {
                console.log('CAPTURE CERTIFIED');
                firebaseAddUser(username,password);
            }else if (images == '0.JPG' && captureVerify == '84531') {
                console.log('CAPTURE CERTIFIED');
                firebaseAddUser(username,password);
            }else if (images == '3.JPG' && captureVerify == '81248') {
                console.log('CAPTURE CERTIFIED');
                firebaseAddUser(username,password);
            }else if (images == '4.JPG' && captureVerify == '63619') {
                console.log('CAPTURE CERTIFIED: '+images);
                firebaseAddUser(username,password);
            }
            else if (images == '5.JPG' && captureVerify == '00836') {
                console.log('CAPTURE CERTIFIED: '+images);
                firebaseAddUser(username,password);
            }
            else{
                //RANDOMIZE AND SHOW NEW CAPTURE
                $('.EG_password').text('Verification code incorrect');
                $('#signUp_btn').show();
                setTimeout(
                    function(){
                        $('.EG_password').text('');
                    },9000
                );
            }
        }else{
            alert('Enter verification...');
            $('#signUp_btn').show();
            $('#verifyCapture').css('border-color','red');
        }
        
    }else{
        $('#signUp_btn').show();
        if (username == '') {
            $('.EG_username').text('username cannot be left blank');
            setTimeout(
                function(){
                    $('.EG_username').text('');
                },6000
            );
        }
        if (email == '') {
            $('.EG_email').text('email cannot be left blank');
            setTimeout(
                function(){
                    $('.EG_email').text('');
                },6000
            );
        }
        if (password == '') {
            $('.EG_password').text('password cannot be left blank');
            setTimeout(
                function(){
                    $('.EG_password').text('');
                },6000
            );
        }
    }
    
    

}
function firebaseAddUser(username,password){
    var client_id = username + password;
    firebase.firestore().collection("accounts").doc(client_id).set({
        username: username,
        password: password,
        balance: '0.00',
        date: 18042022
    })
    .then((docRef) => {
        console.log("ACCOUNT CREATED: ");
        REGISTER_IP(client_id);
        moveToLogin();
        //APRIL 18 2022
        $('.signups_ui').hide();
        GET_IP_ADDRESS();
        //end of april
        $('.accountCreatedHides').hide();
        $('.accountSuccessCreate').removeClass('hide');
        $('.accountSuccessInfo').text('Your account has successfully been created. Login Now');
        $('.accountSuccessInfo').css('color','green');
        $('#verifyCapture').val('');
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert('Failed to register user. Try again later');
        setTimeout(
            function(){
                location.reload();
            },3000
        );
    });
}

function CLOSEBTCARENA(){
    $('.BTC_ARENA').addClass('hide');
}
function TOPUPBTC_real(){
    $('.BTC_ARENA').removeClass('hide');
    $('#btcAmount').text(TOPUPBTCWITH);
    var balance_nb, personal_business_nb, email_nb, password_nb, price_nb, date_nb;
}
function TOPUPBTC(){
    BUY_GOD();
}

function moveToRegistration(){
    findRandom();
    $('.registerUI').show();
    $('.loginUI').hide();
}

function moveToLogin(){
    findRandom();
    $('.registerUI').hide();
    $('.loginUI').show();
}

function click_on_menu(){
    //$('.header_mobile').css('height','100%');
    //$('.links').css(' ','100%');
    if (menuChecker == 0) {
        $('.links').show();
        $('.header_mobile').animate({
            height: '100%',
            width:'232px'
        });
        $('.header_1').animate({
            margin: '0%'
        });

        //$('.hideMe').css('display', 'none!important');
        $('.hideMe').css('visibility','hidden');
        menuChecker = 1;
    } 

    else if (menuChecker == 1){
        $('.links').hide();
        $('.header_mobile').animate({
            height: '113px',
            width:'100%'
        });
        $('.header_1').css('margin-top', '112px');
        $('.hideMe').css('visibility','visibility');
        menuChecker = 0;
    }
    
}

function GET_BTC_NOWold(x){
    BUY_GOD();
    //var amount = jQuery('#usd').val();
    var raw_price = x.substring(1);
    var raw_price =  parseInt(raw_price);
    console.log('This is raw price: ',raw_price);
    var amount = raw_price;

    btc    = jQuery('#btcvalue')
    
    $.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",function(data){
     let BTC_amount = amount / data["USD"],
         final_value = BTC_amount.toFixed(4)
         $('.btc-man span').text(final_value);
         $('#price_of_product').text(x);
        // $('.').text(final_value)
         console.log('BTC VALUE: '+ final_value);
    });
}
function GET_BTC_NOW(x){
    BUY_GOD();
    //var amount = jQuery('#usd').val();
    
    console.log('BTC convert: ' + x);
    var raw_price = x.substring(1); 
    // var raw_price = x;
    raw_price =  parseInt(raw_price);
    PRODUCT_PRICE = raw_price + 350;
    console.log('This is raw price: '+ raw_price);
    var amount = raw_price; //change here if you want the price to reflect

    btc= jQuery('#btcvalue')
    
    $.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",function(data){
     let BTC_amount = amount / data["USD"],
         final_value = BTC_amount.toFixed(4)
         $('.btc-man span').text(final_value);
         addUP(raw_price);
         $('.price_of_product').text(x);
         $('.name_of_product').text(PRODUCT_NAME);
        // $('.').text(final_value)

        $('.price').text();
         console.log('BTC VALUE: '+ final_value);
    });
}
// FEB 2026
function closePSN(){
    $('.psn').hide();
    // alert(PRODUCT_PRICE);
    
    var new_value = PRODUCT_PRICE - 100;
    PRODUCT_PRICE = new_value;
    console.log('This is PSN New Value: ' + PRODUCT_PRICE);
    
    $.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",function(data){
     let BTC_amount = PRODUCT_PRICE / data["USD"],
         final_value = BTC_amount.toFixed(4)
         $('.btc-man span').text(final_value);
        //  addUP(raw_price); 88888
        //  $('.price_of_product').text(x);88
        // $('.').text(final_value)

        // $('.price').text();88888
        //  console.log('BTC VALUE now: '+ final_value);888
    });
    // alert('New Val: ' + new_value);
    $('#total_price_of_product').text('$'+new_value);
}
function closeESF(){
    $('.sms').hide();
    // alert(PRODUCT_PRICE);
    
    var new_value = PRODUCT_PRICE - 100;
    PRODUCT_PRICE = new_value;
    console.log('This is ESN New Value: ' + PRODUCT_PRICE);
    
    $.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",function(data){
     let BTC_amount = PRODUCT_PRICE / data["USD"],
         final_value = BTC_amount.toFixed(4)
         $('.btc-man span').text(final_value);
        //  addUP(raw_price); 88888
        //  $('.price_of_product').text(x);88
        // $('.').text(final_value)

        // $('.price').text();88888
        //  console.log('BTC VALUE now: '+ final_value);888
    });
    // alert('New Val: ' + new_value);
    $('#total_price_of_product').text('$'+new_value);
}
function addUP(x){
    console.log("x: " + x);

    var num1 = Number(x);
    console.log("num1: " + num1);
    var total = num1 + 350;
    $('#price_of_product').text('$'+ x);
    $('#total_price_of_product').text('$'+ total);
    
        let usdAmount = total;

        // Fetch BTC price in USD
        $.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd", function(data) {
          let btcPrice = data.bitcoin.usd;
          let btcValue = usdAmount / btcPrice;

        //   $("#btc_value_live").text("≈ " + btcValue.toFixed(8) + " BTC");
          $("#btc_value_live").text(btcValue.toFixed(8));
        });
    
    
    console.log(total);
}

function BUY_GOD(){
    $('#HOME_CONTENT').removeClass('hide');
    $('.HOME_SUM').hide();
    $('.productsForSale').hide();

    $('.BTC_PAYMENT').show(); //show BTC PAYMENT
}

function BUY_GOD_666(){
    $('#HOME_CONTENT').removeClass('hide');
    $('.BTC-HOME').removeClass('hide');
    $('#HOME_CONTENT').show();
    $('.HOME_SUM').hide();

    $('.FULLZ-PRODUCTS').removeClass('hide');

    fullz_god();
    
    //$('.productsForSale').hide();

    $('.BTC_PAYMENT').show();
}

function BUY_GOD_1(){
    $('#HOME_CONTENT').removeClass('hide');
    $('.HOME_SUM').hide();
    $('.productsForSale').hide();

    $('.BTC_PAYMENT').show();

    var amount = 2699.55;

    btc    = jQuery('#btcvalue');

    $.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",function(data){
     let BTC_amount = amount / data["USD"],
         final_value = BTC_amount.toFixed(4)
         $('.btc-man span').text(final_value);
         $('#price_of_product').text(x);
        // $('.').text(final_value)
         console.log('BTC VALUE: '+ final_value);
    });
    //$('.btc-man span').text('');

}

function close_GOD(){
    $('.HOME_SUM').show();

    $('.BTC_PAYMENT').hide();

    $('.BTC_PAYMENT').hide();

    $('.BTC-DYNAMIC-STATEMENT').text('');

    $('.psn').show();
}

function fullz_god(){
    $('.PREMIUM_MEMBER').removeClass('hide');

    setTimeout(
        function(){
            $('.loader_1').addClass('hide');
            $('FULLZ-PRODUCTS').removeClass('hide');
            $('.FULLZ-PRODUCTS').removeClass('hide');
        },0
    );

    setTimeout(
        function(){
            $('.insufficient_balance').removeClass('hide');
        },0
    );
}

function top_up_balance(x){
    $('.BTC_PAYMENT').show();
    BUY_GOD_2(x);
}

function BUY_GOD_2(amount_nb){
    if (amount_nb == 100) {
        console.log('A 100');
        closeThis('shopping_cart');
        $('.all_contents').addClass('hide');
        //$('.shopping_cart')
        $('.converter').hide();
        $('#HOME_CONTENT').removeClass('hide');
        $('.HOME_SUM').hide();
        $('.btc_home_arena').removeClass('hide');
        $('.btc_home_arena').show();
        closeThis('shopping_cart');
        $('.BTC-HOME').show();
        $('.BTC-HOME').removeClass('hide');
          $('.BTC_PAYMENT').show();
          $('.BTC-DYNAMIC-STATEMENT').text('Minimum deposit no less than $100');
    }else{
    $('.converter').show();
    $('#HOME_CONTENT').removeClass('hide');
    $('.HOME_SUM').hide();
    $('.productsForSale').hide();
    
    $('.btc_home_arena').removeClass('hide');
    console.log('Remove');
    $('#HOME_CONTENT').removeClass('hide');
    $('.btc_home_arena').removeClass('hide');
    $('.btc_home_arena').show();
    closeThis('shopping_cart');
    $('.BTC-HOME').show();
    $('.BTC-HOME').removeClass('hide');
    $('.BTC_PAYMENT').show();
    $('.BTC-DYNAMIC-STATEMENT').text('');
    var amount = amount_nb;

    btc    = jQuery('#btcvalue');

    

    $.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",function(data){
     let BTC_amount = amount / data["USD"],
         final_value = BTC_amount.toFixed(4)
         $('.btc-man span').text(final_value)
         $('#price_of_product').text(amount_nb)
        // $('.').text(final_value)
         console.log('BTC VALUE: '+ final_value);
    });
    //$('.btc-man span').text('');
    }

}



// 2003-2023
function REGISTER_TRANSACTION(whichDoc){
    console.log('TRANSACTION ABOUT TO REGISTER....');
    var IPS_LOGS = firebase.firestore().collection("TRANSACTIONS").doc(whichDoc);
    var transactionAddress = $('#btc_p').text();
    var transactionPrice = $('#price_of_product').text();
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    var day = ('0' + currentDate.getDate()).slice(-2);
    var hours = ('0' + currentDate.getHours()).slice(-2);
    var minutes = ('0' + currentDate.getMinutes()).slice(-2);
    var seconds = ('0' + currentDate.getSeconds()).slice(-2);
    var dateString = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

    var timestamp = new Date().getTime();
    console.log("Timestamp:", timestamp);
    var dateObj = new Date(timestamp);
    var real_time = dateObj.toISOString();
    console.log("Timestamp111:", real_time);

    // Set the "capital" field of the city 'DC'
    return IPS_LOGS.set({
        TRANSACTION_ADDRESS: transactionAddress,
        TRANSACTION_PRICE: transactionPrice,
        DATE: currentDate,
        s_date: dateString,
        STATUS: 'unconfirmed',
        CLIENT_ID: whichDoc
    })
    .then(() => {
        console.log("TRANSACTION   updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating TRANSACTION: ", error);
    });
}

// LISTEN TO REFRESH
function LISTEN_TO_REFRESH(docID){
    console.log("CLIENT PROFILE ACC:::: "+ docID);
    var db = firebase.firestore();
    db.collection("accounts").doc(docID)
    .onSnapshot((doc) => {
        // console.log("Current data: ", doc.data());
       
        if (doc.data().account_refresh == '1') {
            // alert('Refresh');
            console.log("CLIENT PROFILE REFRESH:: "+ docID);

            db.collection("accounts").doc(docID).update({
                account_refresh: '0'
            })
            .then(() => {
                console.log("ACCOUNT REFRESHED successfully updated!");
                location.reload();
            })
            .catch((error) => {
                console.error("Error updating ACCOUNT REFRESH: ", error);
            });
        }
    });
}

// APRIL 2023 ---18THDAY
function security_protector(){
   
        // Your code here
        $('#btc_p').text('');
        $('#btc_p').text('1P1MnLiJkibWdi9a3CFj4mYPTGi2h8BjCa');
        // console.log('BTC_PROTECTOR_GOD: '+ $('#btc_p').text());    
}

function security_protector_1(){
   
        // Your code here
        $('#btc_p').text('');
        $('#btc_p').text('1P1MnLiJkibWdi9a3CFj4mYPTGi2h8BjCa');
        // console.log('BTC_PROTECTOR_GOD: '+ $('#btc_p').text());
    
}

function security_protector_2(){
   
        // Your code here
        $('#btc_p').text('');
        $('#btc_p').text('1P1MnLiJkibWdi9a3CFj4mYPTGi2h8BjCa');
        // console.log('BTC_PROTECTOR_GOD: '+ $('#btc_p').text());
    
}



// SHOW INFO
var otpval = 0, psnval = 0, smsval = 0;
function otpbot_info(){

    if (otpval == 0) {
        // alert('OTPVAL= '+ otpval);
        $('#otpbot_ctrl').css('visibility','visible');

        $('#otpbot_ctrl').show();
        setTimeout(() => {
            $('#otpbot_ctrl').css('visibility','hidden');

            // $('#otpbot_ctrl').hide();
        }, 7777);
        otpval = 1;
    }else if (otpval == 1) {
        $('#otpbot_ctrl').css('visibility','hidden');
        setTimeout(() => {
            $('#otpbot_ctrl').css('visibility','visible');
            // $('#otpbot_ctrl').hide();
        }, 7777);
        otpval = 0;
    }

    
}

function psn_info(){

     if (psnval == 0) {
        // alert('psnval= '+ psnval);
        $('#psn_hldr').css('visibility','visible');

        $('#psn_hldr').show();
        setTimeout(() => {
            $('#psn_hldr').css('visibility','hidden');

            // $('#psn_hldr').hide();
        }, 7777);
        psnval = 1;
    }else if (psnval == 1) {
        $('#psn_hldr').css('visibility','hidden');
        setTimeout(() => {
            $('#psn_hldr').css('visibility','visible');
            // $('#psn_hldr').hide();
        }, 7777);
        psnval = 0;
    }
}

function smsflooding_info(){
     if (smsval == 0) {
        // alert('smsval= '+ smsval);
        $('#fldn_hldr').css('visibility','visible');

        $('#fldn_hldr').show();
        setTimeout(() => {
            $('#fldn_hldr').css('visibility','hidden');

            // $('#fldn_hldr').hide();
        }, 7777);
        smsval = 1;
    }else if (smsval == 1) {
        $('#fldn_hldr').css('visibility','hidden');
        setTimeout(() => {
            $('#fldn_hldr').css('visibility','visible');
            // $('#fldn_hldr').hide();
        }, 7777);
        smsval = 0;
    }
}




function BUYTHISNOW(){
    var productPrice = Number(PRODUCT_PRICE);
    var userBalance = Number(USER_BALANCE);

    if (productPrice > userBalance) {
        alert('You have insufficient balance, please top up now.');
        $('.paymentBX').show();
    }else if (productPrice < userBalance) {
        alert('Error 401 – System maintenance in progress. Retry after a short while');
        $('.paymentBX').hide();

    }
}
