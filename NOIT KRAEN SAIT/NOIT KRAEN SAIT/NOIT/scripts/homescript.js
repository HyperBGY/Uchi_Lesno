document.addEventListener('DOMContentLoaded', function() {
    let goldPassActivated = true;

  function updateGoldPassAppearance() {
      document.querySelectorAll('#goldPass td').forEach(td => {
        if (goldPassActivated) {
          
  function toggleGoldPass() {
    goldPassActivated = !goldPassActivated;
    updateGoldPassAppearance();
}
function darkenTdsByTier() {
  // Get all td elements on the page
  const tds = document.querySelectorAll('td');
  
  tds.forEach(td => {
      
      // Match both "GTierX" and "TierX"
      const match = td.id.match(/^(GTier)(\d+)$/);

      if (match) {
          const tierNumber = parseInt(match[2]); // Extract the tier number

          // ✅ Recognize "GTier0" but keep it fully white (no darkness applied)
          if (tierNumber === 0) {
            td.style.boxShadow = `inset 0 0 0 1000px rgba(0, 0, 0, 0)`;
              return;
          }

          // Apply nonlinear scaling for darkness
          const darknessLevel = Math.pow(Math.min(tierNumber / 100, 1), 1/2);                
          td.style.boxShadow = `inset 0 0 0 1000px rgba(31, 14, 2, ${darknessLevel})`;
            td.style.borderColor = `rgba(0, 0, 0, ${darknessLevel+3/10})`;
          td.style.bacColor = `rgba(0, 0, 0, ${darknessLevel})`;
      }
  });
}

// Call the function once the DOM has fully loaded
darkenTdsByTier();


      }
       else {

          
  function toggleGoldPass() {
    goldPassActivated = !goldPassActivated;
    updateGoldPassAppearance();
}

function darkenTdsByTier() {
  // Get all td elements on the page
  const tds = document.querySelectorAll('td');
  
  tds.forEach(td => {
      //console.log(`Processing td with ID: ${td.id}`);  // Debugging: Log the td's ID
      
      // Match both "GTierX" and "TierX"
      const match = td.id.match(/^(GTier)(\d+)$/);

      if (match) {
          const tierNumber = parseInt(match[2]); // Extract the tier number

          // ✅ Recognize "GTier0" but keep it fully white (no darkness applied)
          if (tierNumber === 0) {
            td.style.boxShadow = `inset 0 0 0 1000px rgba(0, 0, 0, 0)`;
              return;
          }

          // Apply nonlinear scaling for darkness
          const darknessLevel = Math.pow(Math.min(tierNumber / 100, 1), 1/2);                
          td.style.boxShadow = `inset 0 0 0 1000px rgba(31, 14, 2, ${darknessLevel+1/2})`;
            td.style.borderColor = `rgba(0, 0, 0, ${0.5 + darknessLevel+2/10})`;
      }
  });
}

// Call the function once the DOM has fully loaded
darkenTdsByTier();


      }
      });
  }
  
  updateGoldPassAppearance();
  

  function darkenTdsByTier2() {
    // Get all td elements on the page
    const tds = document.querySelectorAll('td');
    
    tds.forEach(td => {
        
        // Match both "GTierX" and "TierX"
        const match = td.id.match(/^(STier)(\d+)$/);
  
        if (match) {
            const tierNumber = parseInt(match[2]); // Extract the tier number
  
            // ✅ Recognize "GTier0" but keep it fully white (no darkness applied)
            if (tierNumber === 0) {
              td.style.boxShadow = `inset 0 0 0 1000px rgba(0, 0, 0, 0)`;
                return;
            }
  
            // Apply nonlinear scaling for darkness
            const darknessLevel = Math.pow(Math.min(tierNumber / 100, 1), 1/2);                
            td.style.boxShadow = `inset 0 0 0 1000px rgba(2, 14, 31, ${darknessLevel})`;
            td.style.borderColor = `rgba(2, 12, 28, ${darknessLevel+2/10})`;
        }
    });
  }
  
  // Call the function once the DOM has fully loaded
  darkenTdsByTier2();


});

function extractDayAndYearFromDate(){
  const date = new Date();
  let dateString = date.toString();
  dateString = dateString.slice(8, 21);
  let day = dateString.slice(0, 2);
  let year = dateString.slice(3, 7);
  let i = 0;



  while (i < day.length && day[i] === '0') //Increments [i], whilst it's less than the length of [day] and is equal and the same type to 0
  {
    i++;
  }

  day = day.slice(i) || "0";

// Extract the substring starting from the first non-zero character
  day = parseInt(day); //Turns [day] into an integer
  year = parseInt(year); //Turns [year] into an integer
  //console.log(day);//debugging
  //console.log(year);//debugging

}
function extractMonthFromDate(){
  const date = new Date();
  let dateString = date.toString();
  let month = dateString.slice(4, 7);
  let monthnum;

  switch(month){
    case "Jan":
      monthnum = 1;
      break;
    case "Feb":
      monthnum = 2;
      break;
    case "Mar":
      monthnum = 3;
      break;
    case "Apr":
      monthnum = 4;
      break;
    case "May":
      monthnum = 5;
      break;
    case "Jun":
      monthnum = 6;
      break;
    case "Jul":
      monthnum = 7;
      break;
    case "Aug":
      monthnum = 8;
      break;
    case "Sep":
      monthnum = 9;
      break;
    case "Oct":
      monthnum = 10;
      break;
    case "Nov":
      monthnum = 11;
      break;
    case "Dec":
      monthnum = 12;
      break;
    
  }

  //console.log(monthnum); //debugging
}

extractDayAndYearFromDate();

extractMonthFromDate();

const date = new Date();
//console.log(date);

let eventName;
let eventDate;
let eventDescription;
let eventTime;

const eventNames = [];
const eventDescriptions = [];
const eventDates = [];
const eventTimes = [];

const eventInfo = {};
const eventInfos = [];

let newRowIndex = 0;
const newRowIndexes = [];
let i = 0;
let bookNum = 0;

let skibidiFort = true;

window.onload = function() { 
  bookNum++;

  document.getElementById("eventBook").id = `eventBook${bookNum}`;


  setTimeout(() => {
    document.getElementById(`eventBook${bookNum}`).classList.add('eventBookCss');
    document.querySelectorAll(`#eventBook${bookNum} td`).forEach(td => td.classList.add('eventBookCssTr'));
    document.querySelectorAll(`#eventBook${bookNum} tr`).forEach(tr => tr.classList.add('eventBookCssTd')); 
}, 0);


    document.getElementById("submitBox").onclick = function() {

      i++;

      if (skibidiFort){
        // Get input values
        let eventName = document.getElementById("eventNameBox").value;
        let eventDescription = document.getElementById("eventDescriptionBox").value;
        let eventDate = document.getElementById("eventDateBox").value;
        let eventTime = document.getElementById("eventTimeBox").value;

        // Push values into arrays
        eventNames.push(eventName);
        eventDescriptions.push(eventDescription);
        eventDates.push(eventDate);
        eventTimes.push(eventTime);

        //console.log(eventNames, eventDescriptions, eventDates, eventTimes);

        // Store in eventInfo object

        eventInfo.name = eventName;
        eventInfo.description = eventDescription;
        eventInfo.date = eventDate;
        eventInfo.time = eventTime;


        eventInfos.push(eventInfo);
        



        // Add data to table
        let table = document.getElementById(`eventBook${bookNum}`);
        let newRow = table.insertRow();

        console.log(eventInfo);

        newRowIndex ++;
        newRowIndexes.push(newRowIndex);

        newRow.id = `newRow${newRowIndex}`;

        eventInfo.id = newRow.id;



 


        
        let newRowInfo = [eventName, eventDescription, eventDate, eventTime, newRowIndex]; 
        //console.log(newRowInfo); //debugging

        //console.log(newRowIndex);
        //console.log(newRowIndexes);
        
        newRow.classList.add("styledEventBookTrTd");

        
        let numCell = newRow.insertCell(0);
        let nameCell = newRow.insertCell(1);
        let descCell = newRow.insertCell(2);
        let dateCell = newRow.insertCell(3);
        let timeCell = newRow.insertCell(4);
        let iconCell = newRow.insertCell(5);

        let cells = [numCell, nameCell, descCell, dateCell, timeCell];
        cells.forEach(cell => {
            cell.classList.add("styledEventBookTrTd");
        });
      

        numCell.innerHTML = `<input  id="eventTimeBox" style="max-width: 2.604vw;text-align: center;" value="${newRowIndex}" disabled>`;
        nameCell.innerHTML = `<input  id="eventTimeBox" value="${eventName}" disabled>`;
        descCell.innerHTML = `<input id="eventTimeBox" value="${eventDescription}" disabled>`;
        dateCell.innerHTML = `<input type="date" id="eventDateBox" value="${eventDate}" disabled>`;
        timeCell.innerHTML = `<input type="time" id="eventTimeBox" value="${eventTime}" disabled>`;
        iconCell.innerHTML = `<div style="border:none;min-width:5.208vw;" >   <img  id="editBox${newRowIndex}" src="/assets/editRowIcon.png"> <img  id="deleteBox${newRowIndex}" src="/assets/deleteRowIcon.png"> </div>` ;

        let nameCellValue = nameCell.value;

        //console.log(nameCellValue);

        let deleteBoxId = document.getElementById(`deleteBox${newRowIndex}`);


        //console.log(newRowIndex + 'rowIndex');
        //console.log(rowId + ' rowId');

        // Clear input fields after submission
        setTimeout(function() {
            document.getElementById("eventNameBox").value = "";
            document.getElementById("eventDescriptionBox").value = "";
            document.getElementById("eventDateBox").value = "";
            document.getElementById("eventTimeBox").value = "";
        }, 0);

      }
        
        if (newRowIndex >= 50) {  
          skibidiFort = false;
        }
        else if (newRowIndex > 40) {  
            for (let i = 31; i <= 40; i++) {
                let row = document.getElementById(`newRow${i}`);
                if (row) row.style.display = "none";
            }
        } else if (newRowIndex > 30) {  
            for (let i = 21; i <= 30; i++) {
                let row = document.getElementById(`newRow${i}`);
                if (row) row.style.display = "none";
            }
        } else if (newRowIndex > 20) {  
            for (let i = 11; i <= 20; i++) {
                let row = document.getElementById(`newRow${i}`);
                if (row) row.style.display = "none";
            }
        } else if (newRowIndex > 10) {  

          
            for (let i = 0; i <= 10; i++) {
                let row = document.getElementById(`newRow${i}`);
                if (row) row.style.display = "none";
            }
        }

        if (newRowIndex <= 10)
          {
            document.getElementById('pageNumButton').max = 1;
            document.getElementById('pageNumButton').value = 1;
          }
        else if (newRowIndex > 10 && newRowIndex <= 20)
          {
            document.getElementById('pageNumButton').max = 2;
            document.getElementById('pageNumButton').value = 2;
          }
        else if (newRowIndex > 20 && newRowIndex <= 30)
          {
            document.getElementById('pageNumButton').max = 3;
            document.getElementById('pageNumButton').value = 3;
          }
        else if (newRowIndex > 30 && newRowIndex <= 40)
          {
            document.getElementById('pageNumButton').max = 4;
            document.getElementById('pageNumButton').value = 4;
          }
        else if (newRowIndex > 40 && newRowIndex <=50)
          {
            document.getElementById('pageNumButton').max = 5;
            document.getElementById('pageNumButton').value = 5;
          }

      }

      document.getElementById('pageNumButton').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            let pageNumber = parseInt(this.value); // Convert input to a number
    
            // Hide all rows first
            for (let i = 0; i <= 50; i++) {
                let row = document.getElementById(`newRow${i}`);
                if (row) row.style.display = "none";
            }
    
            // Show rows based on the page number
            if (pageNumber === 1) {
                for (let i = 1; i <= 10; i++) {
                    let row = document.getElementById(`newRow${i}`);
                    if (row) row.style.display = "";
                }
            } else if (pageNumber === 2) {
                for (let i = 11; i <= 20; i++) {
                    let row = document.getElementById(`newRow${i}`);
                    if (row) row.style.display = "";
                }
            }
            else if (pageNumber === 3) {
              for (let i = 21; i <= 30; i++) {
                  let row = document.getElementById(`newRow${i}`);
                  if (row) row.style.display = "";
              }
            }
            else if (pageNumber === 4) {
              for (let i = 31; i <= 40; i++) {
                  let row = document.getElementById(`newRow${i}`);
                  if (row) row.style.display = "";
              }
            }
            else if (pageNumber === 5) {
              for (let i = 41; i <= 50; i++) {
                  let row = document.getElementById(`newRow${i}`);
                  if (row) row.style.display = "";
              }
            }
            
        }


    
    });



    document.getElementById('eventSearchBox').addEventListener("input", e => {
      const value = e.target.value.toLowerCase(); // Case-insensitive search
    
      eventInfos.forEach(eventInfo => {
    
        const isVisible = eventInfo.name.toLowerCase().includes(value);
        
        eventInfo.id.classList.toggle("hide", isVisible);
      });
    });



        
        document.getElementById(`deleteAllBox`).onclick = function() {
          newRowIndex = 0;
  let table = document.getElementById(`eventBook${bookNum}`); // Get the table

  let tableRowsNumber = table.rows.length


  if (tableRowsNumber > 2) {// Check if there's at least one row to delete

    document.getElementById('pageNumButton').max = 1;
    document.getElementById('pageNumButton').value = 1;
    newRowIndex = 0;
    for (i = tableRowsNumber - 1; i >= 2; i--)
    {
      
      table.deleteRow(i);
    
    }

  

      }

  




};

// document.getElementById(`editBox${newRowIndex}`).onclick = function(){

//   nameCell.innerHTML = `<input  id="eventTimeBox" value="${eventName}">`;
//   descCell.innerHTML = `<input id="eventTimeBox" value="${eventDescription}" >`;
//   dateCell.innerHTML = `<input type="date" id="eventTimeBox" value="${eventDate}" >`;
//   timeCell.innerHTML = `<input type="time" id="eventTimeBox" value="${eventTime}" >`;


  
// }


};







