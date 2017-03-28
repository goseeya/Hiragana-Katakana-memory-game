import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class MemoryTop extends React.Component{
  constructor(props){
    super(props);
    this.state={
      style: {
        display: 'none'
      }
    }
  };
  // window.scrollTo(0, 1000);

  render(){
    return <div>
      <header>
        <ul><li id='menu' onClick={this.handleClick} style={{cursor: 'pointer'}}>menu<ul style={this.state.style}><li><a href='#game'>game</a></li></ul></li><li><a href='#'>about me</a></li><li><a href="mailto: mrakowskaa@gmail.com ">contact</a></li></ul>
      </header>
    </div>
  }

  handleClick=()=>{
    if(this.state.style.display== 'none'){
      this.setState({
        style: {
          display: 'block'
        }
      })
    }else{
      this.setState({
        style: {
          display: 'none'
        }
      })
    }

  }
}

class MemoryFlag extends React.Component{
  render(){
    let actDate = new Date();
    let actHour = actDate.getHours();
    let hello = '';
    if(actHour<11){
      hello = 'おはようございます';
    }else if(actHour>=11&&actHour<18){
      hello = 'こんにちは';
    }else {
      hello = 'こんばんは';
    }
    return <div className='flag'><h1 id='hello'>{hello}</h1></div>
  }
}


//memeorygame
function Square(props) {
    return (
      <div className="square" onClick={() => props.onClick()}>
        {props.value}
      </div>
    );
}

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(12).fill(null),
      tablica: getArray(),
      tablicaMoja: [],
      klikniete: [],
      xIsNext: true,
      pary: [],
      counter: 0,
      backgroundImage: 'url("./sushiroll.jpg")',
      selectedCounter: 0,
      val1:true,
      val2:false,
      val3:false,
    }

    function getArray(props){
      let arr = ['あ','い','う','え','お','か','a','i','u','e','o','ka']
      return arr;
    }
  }



  renderSquare(i) {

    return <Square style={{boxSizing: 'border-box'}} value={this.state.squares[i]}
       onClick={ () => this.handleClick(i)} onDoubleClick={ () => this.handleClick2(i)}/>;
  }


  handleChange1=()=>{
this.setState({
        val1: true,
        val2: false,
        val3: false
      })

  }
  handleChange2=()=>{
      this.setState({
        val1: false,
        val2: true,
        val3: false
      })

  }
  handleChange3=()=>{
      this.setState({
        val1: false,
        val2: false,
        val3: true
      })

  }

  handleClickReload=()=>{
  window.location.reload()
  }

  handleClick(i) {
    this.setState({
      backgroundImage: 'url("./flaga.jpg")',
      counter: this.state.counter+1,
      selectedCounter: this.selectedCounter+1,
    })
    // const klikniete = [];
    const squares2 = this.state.squares.slice();
    console.log(i);
    console.log(this.state.tablica[i]);
    squares2[i] = this.state.tablica[i];
    this.state.klikniete.push(this.state.tablica[i]);
    console.log(this.state.klikniete);
    this.setState({
      squares: squares2,
    });
    this.timerId=setTimeout(()=>{
      if(this.state.klikniete.length==2){
        // console.log(tablica.indexOf(this.state.klikniete[this.state.klikniete.length-2]))
//jezeli square[i] nie zawiera czyli index -1 to zmieniamy na null
let squaresNew = this.state.squares.slice();

        this.setState({squares: Array(12).fill(null),
          klikniete: [],
        backgroundImage: 'url("./sushiroll.jpg")'})
      }
    },2000)
    if(this.state.klikniete.length>2){
      this.setState({squares: Array(12).fill(null), klikniete:[]})
    }
    if(this.state.klikniete.length===2&&this.state.tablica.indexOf(this.state.klikniete[this.state.klikniete.length-1])===this.state.tablica.indexOf(this.state.klikniete[this.state.klikniete.length-2])+6||
    this.state.klikniete.length===2&&this.state.tablica.indexOf(this.state.klikniete[this.state.klikniete.length-1])===this.state.tablica.indexOf(this.state.klikniete[this.state.klikniete.length-2])-6){
      console.log('para');
      console.log(i);
      this.state.pary.push(i);
}
  }
  render(i) {

let tablicaSquare = [  <Square value={this.state.squares[0]}
     onClick={ () => this.handleClick(0)}/>,

   <Square style={{backgroundColor: 'red', boxSizing: 'border-box'}} value={this.state.squares[1]}
        onClick={ () => this.handleClick(1)}/>,

      <Square style={{boxSizing: 'border-box'}} value={this.state.squares[2]}
           onClick={ () => this.handleClick(2)}/>,

         <Square style={{boxSizing: 'border-box'}} value={this.state.squares[3]}
              onClick={ () => this.handleClick(3)}/>,

            <Square style={{boxSizing: 'border-box'}} value={this.state.squares[4]}
                 onClick={ () => this.handleClick(4)}/>,

               <Square style={{boxSizing: 'border-box'}} value={this.state.squares[5]}
                    onClick={ () => this.handleClick(5)}/>,

                  <Square style={{boxSizing: 'border-box'}} value={this.state.squares[6]}
                       onClick={ () => this.handleClick(6)}/>,

                     <Square style={{boxSizing: 'border-box'}} value={this.state.squares[7]}
                          onClick={ () => this.handleClick(7)}/>,

                        <Square style={{boxSizing: 'border-box'}} value={this.state.squares[8]}
                             onClick={ () => this.handleClick(8)}/>,

                           <Square style={{boxSizing: 'border-box'}} value={this.state.squares[9]}
                                onClick={ () => this.handleClick(9)}/>,

                              <Square style={{boxSizing: 'border-box'}} value={this.state.squares[10]}
                                   onClick={ () => this.handleClick(10)}/>,

                                 <Square style={{boxSizing: 'border-box'}} value={this.state.squares[11]}
                                      onClick={ () => this.handleClick(11)}/>]
      //jezeli tablica para zawiera indeks i to slice i,1

      for (var i = 0; i < 6; i++) {
        console.log(this.state.pary);
        if(this.state.pary.indexOf(i)>=0){
          tablicaSquare[i]=<Square value={this.state.tablica[i]}/>
          tablicaSquare[i+6]=<Square value={this.state.tablica[i+6]}/>
        }
      }

      for (var i = 6; i < 12; i++) {
        console.log(this.state.pary);
        if(this.state.pary.indexOf(i)>=0){
          tablicaSquare[i]=<Square value={this.state.tablica[i]}/>
          tablicaSquare[i-6]=<Square value={this.state.tablica[i-6]}/>
        }
      }

    // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    return (
      <div>
        <div className='options'>
          <h1>hiragana &amp; katakana matching game</h1>
          <h2>learn japanese alphabet with fun</h2>
          <a name='game'></a>
          <input onChange={this.handleChange1} checked={this.state.val1} type="radio" id="cbox1" value="first_checkbox"></input>
          <label for="cbox1">hiragana</label>
          <input onChange={this.handleChange2} checked={this.state.val2} type="radio" id="cbox2" value="first_checkbox"></input>
          <label for="cbox2">katakana</label>
          <input onChange={this.handleChange3} checked={this.state.val3} type="radio" id="cbox3" value="first_checkbox"></input>
          <label for="cbox3">both</label>
          <p>moves: {this.state.counter}</p>
        </div>
        <div className="status">{status}</div>
        {tablicaSquare}
        <input id='play' type="button" value="play again" onClick={this.handleClickReload}></input>
      </div>
    );
  }
}

class MemoryGame extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
//end of memorygame


class MemoryBottom extends React.Component{
  render(){
    return <footer>
      &copy; Małgorzata Rakowska 2017<a href="mailto: mrakowskaa@gmail.com "> mrakowskaa@gmail.com </a>
    </footer>
  }
}

class App extends React.Component{
  render(){
    return <div>
      <MemoryTop/>
      <MemoryFlag/>
      <MemoryGame/>
      <MemoryBottom/>
    </div>
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
