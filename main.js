var btn= document.getElementById("btn");
var userbtn= document.getElementById("userbtn");
var dashboard= document.getElementById("dashboard");
var demo=document.getElementById("demo");
var statistics=document.getElementById("statistics");

//---------------------------------click  for subscription list-------------------------------------------------
btn.addEventListener("click",function()  
{
   var subscriptionobj= new XMLHttpRequest();

   subscriptionobj.onload= function()
   {
   		var subscription= JSON.parse(subscriptionobj.responseText);
   		displaysubscription(subscription);
   };
   subscriptionobj.open('get','subscriptions.json');
   subscriptionobj.send();
});

//------------------------------------------------------displaying the subscription list------------------------------------------------------
function displaysubscription(sub)
{
   //var subscriptioninfo="<div class='buttons'><div class='dropdown'> <button class='dropbtn' id='sort'onclick=sortlist()>Sort By user ID </button></div><div class='dropdown'> <button class='dropbtn' id='sort'onclick=sortlistbydate()>Sort By user expiration date </button></div>";
   var subscriptioninfo="<div class='dropdown'><button class='dropbtn'>Sort List By</button><div class='dropdown-content'><a onclick=sortlist() href='#'>User ID</a><a onclick=sortlistbydate() href='#'>Expiration Date</a></div></div></div>";

   subscriptioninfo+="<div class='dropdown'><button class='dropbtn'>Filter by Plan</button><div class='dropdown-content'><a onclick=plan1() href='#'>Plan 1</a><a onclick=plan2() href='#'>Plan 2</a><a onclick=plan3() href='#'>Plan 3</a><a onclick=plan6() href='#'>Plan 6</a><a onclick=plan12() href='#'>Plan 12</a><a onclick=planu() href='#'>Plan unlimited</a></div></div></div>";
   subscriptioninfo+=" <div id='info-table'><table>";
   subscriptioninfo+="<tr> <th>ID</th> <th>User ID</th> <th>Package</th> <th>Exparation Date</th></tr>" ;
   for( i=0;i<sub.length;i++)
   {
       subscriptioninfo += "<tr><td>"+sub[i].id+"</td><td>"+sub[i].user_id+"</td><td>"+sub[i].package+"</td><td>"+sub[i].expires_on+"</td></tr>";
   }
   sub+="</table></div>";
   demo.innerHTML=subscriptioninfo;
}

//---------------------------------click  for user list-------------------------------------------------
userbtn.addEventListener("click",function()  
{
   var userobj= new XMLHttpRequest();

   userobj.onload= function()
   {
         var user= JSON.parse(userobj.responseText);
         displayuser(user);
   };
   userobj.open('get','users.json');
   userobj.send();
});


//------------------------------------------------------displaying the user list------------------------------------------------------
function displayuser(user)
{
   var userinfo="<table>";
  userinfo+="<tr> <th>ID</th> <th>First Name</th> <th>Middle Name</th> <th>Last Name</th> <th>Username</th> <th>Email</th> <th>Address</th> <th>Country</th> <th>Join Date</th></tr>" ;
   for( i=0;i<user.length;i++)
   {
       userinfo += "<tr><td>"+user[i].id+"</td><td>"+user[i].first_name+"</td><td>"+user[i].middle_name+"</td><td>"+user[i].last_name+"</td><td>"+user[i].username+"</td><td>"+user[i].email+"</td><td>"+user[i].address+"</td><td>"+user[i].country+"</td><td>"+user[i].join_date+"</td></tr>";
   }
   userinfo+="</table>";
   demo.innerHTML=userinfo;
}


//---------------------------------click  for dashboard ------------------------------------------------------------
dashboard.addEventListener("click",function()  
{
   demo.innerHTML="<h1>Frontend Developer Assignment</h1><p>Designed and Developed by Samrat Siddhi Bajracharya</p>";
});


//--------------------------------------sort subscbtion list by user id-----------------------------

function sortlist()
{
   var subscriptionobj= new XMLHttpRequest();
   subscriptionobj.onload= function()
   {
         console.log(subscriptionobj.responseText);
         var sub= JSON.parse(subscriptionobj.responseText);
         sub.sort(function(a,b)
         {
            if(a.user_id<b.user_id)
            {
               return -1;
            }
            if(a.user_id>b.user_id)
            {
               return 1;
            }
            else
            {
               return 0;
            }

         })
         var subscriptioninfo="<div id='info-table'><table>";
         subscriptioninfo+="<tr> <th>ID</th> <th>User ID</th> <th>Pakage</th> <th>Expiration Date</th></tr>" ;
         for( i=0;i<sub.length;i++)
         {
           subscriptioninfo += "<tr><td>"+sub[i].id+"</td><td>"+sub[i].user_id+"</td><td>"+sub[i].package+"</td><td>"+sub[i].expires_on+"</td></tr>";
         }
         sub+="</table></div>"
         document.getElementById('info-table').innerHTML=subscriptioninfo;
   };
   subscriptionobj.open('get','subscriptions.json');
   subscriptionobj.send();
}

//---------------------------------------------------------sort subscribtion list by name--------------------------------------------

function sortlistbydate()
{
   var subscriptionobj= new XMLHttpRequest();
   subscriptionobj.onload= function()
   {
         console.log(subscriptionobj.responseText);
         var sub= JSON.parse(subscriptionobj.responseText);
         sub.sort(function(a,b)
         {
            var c=Date.parse(a.expires_on);
            var d= Date.parse(b.expires_on);
            if(c<d)
            {
               return -1;
            }
            if(c>d)
            {
               return 1;
            }
            else
            {
               return 0;
            }

         })
         var subscriptioninfo="<div id='info-table'><table>";
         subscriptioninfo+="<tr> <th>ID</th> <th>User ID</th> <th>Pacsadasdkage</th> <th>Expiration Date</th></tr>" ;
         for( i=0;i<sub.length;i++)
         {
           subscriptioninfo += "<tr><td>"+sub[i].id+"</td><td>"+sub[i].user_id+"</td><td>"+sub[i].package+"</td><td>"+sub[i].expires_on+"</td></tr>";
         }
         sub+="</table></div>"
         document.getElementById('info-table').innerHTML=subscriptioninfo;
   };
   subscriptionobj.open('get','subscriptions.json');
   subscriptionobj.send();
}

//------------------------------------------------filtering by plan 1-----------------------------------
function plan1()
{
   var subscriptionobj= new XMLHttpRequest();
   var subscriptioninfo="<div id='info-table'><table>";
   subscriptioninfo+="<tr> <th>ID</th> <th>User ID</th> <th>Package</th> <th>Expiration Date</th></tr>" ;

   subscriptionobj.onload= function()
   {
      var sub= JSON.parse(subscriptionobj.responseText);
      for( i=0;i<sub.length;i++)
      {
        if (sub[i].package==="Plan 1") 
        {
            subscriptioninfo += "<tr><td>"+sub[i].id+"</td><td>"+sub[i].user_id+"</td><td>"+sub[i].package+"</td><td>"+sub[i].expires_on+"</td></tr>";
        } 
      }
      document.getElementById('info-table').innerHTML=subscriptioninfo;
   };
subscriptionobj.open('get','subscriptions.json');
subscriptionobj.send();
}

//------------------------------------------------filtering by plan 2-----------------------------------
function plan2()
{
   var subscriptionobj= new XMLHttpRequest();
   var subscriptioninfo="<div id='info-table'><table>";
   subscriptioninfo+="<tr> <th>ID</th> <th>User ID</th> <th>Package</th> <th>Expiration Date</th></tr>" ;

   subscriptionobj.onload= function()
   {
      var sub= JSON.parse(subscriptionobj.responseText);
      for( i=0;i<sub.length;i++)
      {
        if (sub[i].package==="Plan 2") 
        {
            subscriptioninfo += "<tr><td>"+sub[i].id+"</td><td>"+sub[i].user_id+"</td><td>"+sub[i].package+"</td><td>"+sub[i].expires_on+"</td></tr>";
        } 
      }
      document.getElementById('info-table').innerHTML=subscriptioninfo;
   };
subscriptionobj.open('get','subscriptions.json');
subscriptionobj.send();
}

//------------------------------------------------filtering by plan 3-----------------------------------
function plan3()
{
   var subscriptionobj= new XMLHttpRequest();
   var subscriptioninfo="<div id='info-table'><table>";
   subscriptioninfo+="<tr> <th>ID</th> <th>User ID</th> <th>Package</th> <th>Expiration Date</th></tr>" ;

   subscriptionobj.onload= function()
   {
      var sub= JSON.parse(subscriptionobj.responseText);
      for( i=0;i<sub.length;i++)
      {
        if (sub[i].package==="Plan3") 
        {
            subscriptioninfo += "<tr><td>"+sub[i].id+"</td><td>"+sub[i].user_id+"</td><td>"+sub[i].package+"</td><td>"+sub[i].expires_on+"</td></tr>";
        } 
      }
      document.getElementById('info-table').innerHTML=subscriptioninfo;
   };
subscriptionobj.open('get','subscriptions.json');
subscriptionobj.send();
}

//------------------------------------------------filtering by plan 6-----------------------------------
function plan6()
{
   var subscriptionobj= new XMLHttpRequest();
   var subscriptioninfo="<div id='info-table'><table>";
   subscriptioninfo+="<tr> <th>ID</th> <th>User ID</th> <th>Package</th> <th>Expiration Date</th></tr>" ;

   subscriptionobj.onload= function()
   {
      var sub= JSON.parse(subscriptionobj.responseText);
      for( i=0;i<sub.length;i++)
      {
        if (sub[i].package==="Plan 6") 
        {
            subscriptioninfo += "<tr><td>"+sub[i].id+"</td><td>"+sub[i].user_id+"</td><td>"+sub[i].package+"</td><td>"+sub[i].expires_on+"</td></tr>";
        } 
      }
      document.getElementById('info-table').innerHTML=subscriptioninfo;
   };
subscriptionobj.open('get','subscriptions.json');
subscriptionobj.send();
}

//------------------------------------------------filtering by plan 12-----------------------------------
function plan12()
{
   var subscriptionobj= new XMLHttpRequest();
   var subscriptioninfo="<div id='info-table'><table>";
   subscriptioninfo+="<tr> <th>ID</th> <th>User ID</th> <th>Package</th> <th>Expiration Date</th></tr>" ;

   subscriptionobj.onload= function()
   {
      var sub= JSON.parse(subscriptionobj.responseText);
      for( i=0;i<sub.length;i++)
      {
        if (sub[i].package==="Plan 12") 
        {
            subscriptioninfo += "<tr><td>"+sub[i].id+"</td><td>"+sub[i].user_id+"</td><td>"+sub[i].package+"</td><td>"+sub[i].expires_on+"</td></tr>";
        } 
      }
      document.getElementById('info-table').innerHTML=subscriptioninfo;
   };
subscriptionobj.open('get','subscriptions.json');
subscriptionobj.send();
}

//------------------------------------------------filtering by plan unlimited-----------------------------------
function planu()
{
   var subscriptionobj= new XMLHttpRequest();
   var subscriptioninfo="<div id='info-table'><table>";
   subscriptioninfo+="<tr> <th>ID</th> <th>User ID</th> <th>Package</th> <th>Expiration Date</th></tr>" ;

   subscriptionobj.onload= function()
   {
      var sub= JSON.parse(subscriptionobj.responseText);
      for( i=0;i<sub.length;i++)
      {
        if (sub[i].package==="Plan Unlimited") 
        {
            subscriptioninfo += "<tr><td>"+sub[i].id+"</td><td>"+sub[i].user_id+"</td><td>"+sub[i].package+"</td><td>"+sub[i].expires_on+"</td></tr>";
        } 
      }
      document.getElementById('info-table').innerHTML=subscriptioninfo;
   };
subscriptionobj.open('get','subscriptions.json');
subscriptionobj.send();
}


//----------------------------------statistical representation-----------------------------------------------

statistics.addEventListener("click",function()
{
   var subscriptionobj= new XMLHttpRequest();

   subscriptionobj.onload= function()
   {
      var sub= JSON.parse(subscriptionobj.responseText);
      var pu=0;
      for( i=0;i<sub.length;i++)
      {
        if (sub[i].package==="Plan Unlimited") 
        {
            pu=pu+1;
        } 
      }
      var pone=0;
      for( i=0;i<sub.length;i++)
      {
        if (sub[i].package==="Plan 1") 
        {
            pone=pone+1;
        } 
      }
      var ptwo=0;
      for( i=0;i<sub.length;i++)
      {
        if (sub[i].package==="Plan 2") 
        {
            ptwo=ptwo+1;
        } 
      }
      var pthree=3;
      for( i=0;i<sub.length;i++)
      {
        if (sub[i].package==="Plan3 ") 
        {
            pthree=pthree+1;
        } 
      }
      var psix=0;
      for( i=0;i<sub.length;i++)
      {
        if (sub[i].package==="Plan 6") 
        {
            psix=psix+1;
        } 
      }
      var ptwelve=0;
      for( i=0;i<sub.length;i++)
      {
        if (sub[i].package==="Plan 12") 
        {
            ptwelve=ptwelve+1;
        } 
      }
   var statisticaltable="<table><tr><th>Plan 1</th><th>Plan 2</th> <th>Plan 3 </th> <th>Plan 6</th> <th>Plan 12</th> <th>Plan Unlimited</th></tr>";
   statisticaltable+= "<tr><td>"+pone+"</td><td>"+ptwo+"</td><td>"+pthree+"</td><td>"+psix+"</td><td>"+ptwelve+"</td><td>"+pu+"</td></tr></table>";
    demo.innerHTML=statisticaltable;

   };
   subscriptionobj.open('get','subscriptions.json');
   subscriptionobj.send();
});


