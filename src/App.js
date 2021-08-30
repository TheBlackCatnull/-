import React from "react";
import "./App.css";
import shaolei from "./shaolei.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      td: 20,
      tr: 20,
      add: 80,
      color: [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
      ],
      shuaxin: 0,
      click: this.add.bind(this),
      Class: "content" + " " + "aca2",
      Context: this.bdd.bind(this),
    };
  }

  componentDidMount() {
    document.oncontextmenu = function () {
      return false;
    };
  }
  fff1 = () => {
    //document.querySelector(".content").classList.add('aca1')
    return this.setState({
      td: 10,
      tr: 10,
      add: 25,
      shuaxin: this.state.shuaxin + 1,
      click: this.add.bind(this),
      Class: "content" + " " + "aca1",
      Context: this.bdd.bind(this),
    });
  };
  fff2 = () => {
    //document.querySelector(".content").classList.add('aca2')
    return this.setState({
      td: 20,
      tr: 20,
      add: 80,
      shuaxin: this.state.shuaxin + 1,
      click: this.add.bind(this),
      Class: "content" + " " + "aca2",
      Context: this.bdd.bind(this),
    });
  };
  fff3 = () => {
    //document.querySelector(".content").classList.add('aca3')
    return this.setState({
      td: 30,
      tr: 30,
      add: 150,
      shuaxin: this.state.shuaxin + 1,
      click: this.add.bind(this),
      Class: "content" + " " + "aca3",
      Context: this.bdd.bind(this),
    });
  };
  mailei = () => {
    var value = this.state.tr * this.state.td;
    var lei = [];
    for (var i = 0; i < value; i++) {
      var b = Math.round(Math.random() * value);
      if (lei.indexOf(b) === -1) {
        if (lei.length == this.state.add) {
        } else {
          lei.push(b);
        }
      }
    }
    return lei;
  };

  arr = (value) => {
    var arr = [];
    for (var i = 0; i < value; i++) {
      arr.push(i);
    }
    return arr;
  };
  bdd(event) {
    //let elem=document.querySelector('.content').children;
    let Div = event.target;
    console.log(Div.dataset.ageyouji);
    if (!Div.ageyouji) {
      if (!event.target.add) {
        Div.innerHTML = "▲";
        if (event.target.className == "lei") {
          this.state.add--;
        }
      } else {
        Div.innerHTML = "";
        if (event.target.className == "lei") {
          this.state.add++;
        }
      }

      if (this.state.add == "0") {
        alert("游戏成功");
      }
      console.log(this.state.add);
      event.target.add = !event.target.add;
    }
  }
  add(event) {
    let elem = document.querySelector(".content").children;
    let Div = event.target;
    if (!Div.ageyouji) {
      if (Div.dataset.index !== "lei") {
        //点到数值或空白
        Div.className = this.state.color[Div.dataset.index];
        if (Div.dataset.index == 0) {
          //Div.className=his.state.color[]
          this.get(Div.dataset.age, null);
        } else if (Div.dataset.index >= 0) {
          Div.innerHTML = Div.dataset.index;
          //Div.className=this.state.color[Div.dataset.index];
        }
      } else {
        //点到雷了
        alert("游戏结束你失败了");
        for (var i = 0; i < elem.length; i++) {
          if (elem[i].dataset.index == "lei") {
            elem[i].style.backgroundColor = "red";
            elem[i].innerHTML = "☠";
            elem[i].style.backgroundImage = "url(./shaolei.jpg)";
          }
        }
        this.setState({
          click: null,
          Context: null,
          add: 0,
        });
      }
    }
  }
  get(elem) {
    let Div = document.querySelector(".content").children;
    let elems = this.shuzhi(elem, false);
    for (let i = 0; i < elems.length; i++) {
      Div[elems[i]].className = this.state.color[Div[elems[i]].dataset.index];
      if (Div[elems[i]].dataset.index > 0) {
        Div[elems[i]].innerHTML = Div[elems[i]].dataset.index;
      } else if (Div[elems[i]].dataset.index == 0 && !Div[elems[i]].agedota) {
        Div[elems[i]].innerHTML = "";
        Div[elems[i]].agedota = true;

        this.get(elems[i]);
      }
      Div[elems[i]].ageyouji = true;
    }
  }

  shuzhi = (elem, value) => {
    let elems = parseInt(elem);
    let values = value;
    var elemz = elems + 1;
    var a = 0;
    var Div = [];
    if (elemz % this.state.tr !== 1) {
      if (values && values.indexOf(elems - 1) !== -1) {
        a++;
      } else {
        Div.push(elems - 1);
      }
    }
    if (elemz % this.state.tr !== 0) {
      if (values && values.indexOf(elems + 1) !== -1) {
        a++;
      } else {
        Div.push(elems + 1);
      }
    }
    if (elemz > this.state.tr) {
      if (elemz % this.state.tr !== 1) {
        if (values && values.indexOf(elems - this.state.tr - 1) !== -1) {
          a++;
        } else {
          Div.push(elems - this.state.tr - 1);
        }
      }
      if (elemz % this.state.tr !== 0) {
        if (values && values.indexOf(elems - this.state.tr + 1) !== -1) {
          a++;
        } else {
          Div.push(elems - this.state.tr + 1);
        }
      }
      if (values && values.indexOf(elems - this.state.tr) !== -1) {
        a++;
      } else {
        Div.push(elems - this.state.tr);
      }
    }
    var Bottom = this.state.tr * this.state.td - this.state.tr;
    if (elemz <= Bottom) {
      if (elemz % this.state.tr !== 1) {
        if (values && values.indexOf(elems + this.state.tr - 1) !== -1) {
          a++;
        } else {
          Div.push(elems + this.state.tr - 1);
        }
      }
      if (elemz % this.state.tr !== 0) {
        if (values && values.indexOf(elems + this.state.tr + 1) !== -1) {
          a++;
        } else {
          Div.push(elems + this.state.tr + 1);
        }
      }
      if (values && values.indexOf(elems + this.state.tr) !== -1) {
        a++;
      } else {
        Div.push(elems + this.state.tr);
      }
    }
    if (values) {
      return a;
    } else {
      return Div;
    }
  };

  render() {
    var mailei = this.mailei();
    console.log(this.state.lei);
    return (
      <div id="acc">
        <div className="buttn">
          <button className="active" onClick={this.fff1.bind(this)}>
            初级
          </button>
          <button onClick={this.fff2.bind(this)}>中级</button>
          <button onClick={this.fff3.bind(this)}>高级</button>
          <button>重新开始</button>
        </div>
        <div className={this.state.Class} key={this.state.shuaxin}>
          {this.arr(this.state.tr * this.state.td).map((i, value) => {
            if (mailei.indexOf(i) !== -1) {
              return (
                <div
                  key={i}
                  className="lei"
                  onClick={this.state.click}
                  onContextMenu={this.state.Context}
                  data-age={i}
                  data-index="lei"
                ></div>
              );
            } else {
              var a = this.shuzhi(i, mailei);
              return (
                <div
                  key={i}
                  onClick={this.state.click}
                  onContextMenu={this.state.Context}
                  data-age={i}
                  data-index={a}
                ></div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default App;
