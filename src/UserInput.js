import React from "react";

class UserInput extends React.Component {
  call(l, p, z, k, gaps) {
    let table = document.getElementById("myTable");
    let row = table.insertRow(1);

    let cell;
    let ctr = 0;

    for (let i = 0; i < gaps; i++) {
      cell = row.insertCell(i);
      cell.innerHTML = "_";
      ctr++;
    }

    for (let i = 0; i < this.id.value; i++) {
      if (l < 7) {
        //console.log(p);
        cell = row.insertCell(p);
        cell.innerHTML = ++k;
        ctr++;
      } else {
        l = 0;
        p = 0;
        //console.log(z);
        row = table.insertRow(z + 1);
        cell = row.insertCell(p);
        cell.innerHTML = ++k;
        ++z;
        ctr++;
      }
      ++p;
      l++;
    }

    if (ctr % 7 !== 0) {
      ctr = ctr % 7;
      let ctr1 = ctr;
      ctr = 7 - ctr;
      for (let i = 0; i < ctr; i++) {
        cell = row.insertCell(i + ctr1);
        cell.innerHTML = "_";
      }
    }
  }

  myFunction(event) {
    event.preventDefault();
    let table = document.getElementById("myTable");
    table.innerHTML = "";
    let row = table.insertRow(0);

    let cell;
    //console.log(this.id.value);
    if (this.id.value === '31' || this.id.value === '30')
    {
      //console.log("Hello");
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    days.forEach((day, index) => {
      cell = row.insertCell(index);
      cell.innerHTML = day;
    });

    let k = 0,
      z = 1,
      l = 0,
      p = 0,
      gaps = 0;
    row = table.insertRow(1);

    if (this.day.value === "sun") {
      l = 0;
      p = 0;
      gaps = 0;
    } else if (this.day.value === "mon") {
      l = 1;
      p = 1;
      gaps = 1;
    } else if (this.day.value === "tue") {
      l = 2;
      p = 2;
      gaps = 2;
    } else if (this.day.value === "wed") {
      l = 3;
      p = 3;
      gaps = 3;
    } else if (this.day.value === "thu") {
      l = 4;
      p = 4;
      gaps = 4;
    } else if (this.day.value === "fri") {
      l = 5;
      p = 5;
      gaps = 5;
    } else if (this.day.value === "sat") {
      l = 6;
      p = 6;
      gaps = 6;
    }
    this.call(l, p, z, k, gaps);
    
    var tbl = document.getElementById("myTable");
    //var x=document.getElementById("td");
    if (tbl != null) {
      for (var i = 0; i < tbl.rows.length; i++) {
        for (var j = 0; j < tbl.rows[i].cells.length; j++)
          tbl.rows[i].cells[j].onclick = function () {
            
            getval(this);
          };
      }
    }

    function getval(cel) {
      //alert(cel.innerHTML);
      //var tbl = document.getElementById("myTable");
      //var p=cel.cellIndex;
      //alert(cel.cellIndex );
      console.log(cel.innerHTML+" "+document.getElementById("myTable").rows[0].cells[cel.cellIndex].innerHTML);
      alert(cel.innerHTML + " " + document.getElementById("myTable").rows[0].cells[cel.cellIndex].innerHTML);
      //alert(cel.innerHTML+", "+ q+"" +p);
    }

    
    }
    else {
      console.log("number of days should be 31");
    }

    this.Form.reset();
  }

  render() {
    return (
      <div>
        <form
          ref={input => (this.Form = input)}
          className="item-edit"
          onSubmit={e => this.myFunction(e)}
        >
          <h1> Calendar</h1>

          <input
            ref={input => (this.id = input)}
            type="text"
            placeholder="Enter number of days"
          />
         
          <select ref={(input)=>this.day=input}>
          <option value="sun">sun</option>
          <option value="mon">mon</option>
          <option value="tue">tue</option>
          <option value="wed">wed</option>
          <option value="thu">thu</option>
          <option value="fri">fri</option>
          <option value="sat">sat</option>

          

          </select>
          <button type="submit">Add</button>
        </form>
        <table id="myTable" border="1" />

        <br />
      </div>
    );
  }
}
export default UserInput;

