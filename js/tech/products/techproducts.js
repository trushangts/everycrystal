
var currentTab = 0; 
var selectedCatID = [];

jQuery( document ).ready(function() {
    console.log( "ready22!" );
    // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the crurrent tab
});


function nextPrev(n) {
  //console.log("next" + n);
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateCategory()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateCategory(){
  var checked=false;
  var elements = document.getElementsByName("category[]");
  for(var i=0; i < elements.length; i++){
    if(elements[i].checked) {
      checked = true;
    }
  }
  if (!checked) {
    alert('Please Select Category');
  }
  return checked;
}

function showTab(n) {
    //console.log(n);
  var html;
  if(n==1){
      selectedCatID=[];

      jQuery("#cat input:checkbox:checked").map(function(){
        selectedCatID.push(jQuery(this).data('catname'));
      });
     
      //console.log(selectedCatID);
      html ='';
      jQuery.each(selectedCatID, function( index, value ) {
        html += '<li class="m-b-20 font-weight-bold text-uppercase">'+ value + '<span class="handle-grid"></span></li>';
      });
      
      jQuery('#selectedcat').html(html);
      
  }
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.visibility = "hidden";
  } else {
    document.getElementById("prevBtn").style.visibility= "";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  }
 
  fixStepIndicator(n)
}


function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
 
  // var i, x = document.getElementsByClassName("step");
  // for (i = 0; i < x.length; i++) {
  //   x[i].className = x[i].className.replace(" active", "");
  // }
  // //... and adds the "active" class on the current step:
  // x[n].className += " active";

  var i, x = document.getElementsByClassName("curr-step");
  
  x[0].innerText = n+1;
}