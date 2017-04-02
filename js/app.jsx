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
  render(){
    return <div>
      <header>
        <ul><li id='menu' onClick={this.handleClick} style={{cursor: 'pointer'}}>menu<ul style={this.state.style}><li><a href='#game'>game</a></li></ul></li><li><a href='#'>about me</a></li><li><a href="mailto: mrakowskaa@gmail.com ">contact</a></li></ul>
      </header>
    </div>
  }
  handleClick=()=>{
    if(this.state.style.display==='none'){
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
//memorygame
function Square(props) {
    return (
      <div className="square" onClick={() => props.onClick()}>
        {props.value}
      </div>
    );
}
class MemoryGame extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(12).fill(null),
      tablica: getArray(),
      // tablica2: getArray2(),
      tablicaMoja: [],
      hira: ['あ','い','う','え','お','か','き','く','け','こ','さ','し','す','せ','そ','た','ち','つ','て','と','な','に','ぬ','ね','の','ん','は','ひ','ふ','へ','ほ','ま','み','む','め','も','や','ゆ','よ','ら','り','る','れ','ろ','わ','を','a','i','u','e','o','ka','ki','ku','ke','ko','sa','shi','su','se','so','ta','chi','tsu','te','to','na','ni','nu','ne','no','n','ha','hi','fu','he','ho','ma','mi','mu','me','mo','ya','yu','yo','ra','ri','ru','re','ro','wa','wo'],
      kata: [],
      klikniete: [],
      xIsNext: true,
      pary: [],
      counter: 0,
      backgroundImage: 'url("./sushiroll.jpg")',
      selectedCounter: 0,
      val1:true,
      val2:false,
    }

    function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
//tablica znakow pomieszana i taka sama tablica tlumaczen
//potem losuje liczbe dowolna i od tej robie slicem z 1 tablicy i z 2
//lacze je w jedna tablice
//tasuję tę tablicę i tablica gotowa
    function getArray(props){
      let hiraganaArray = ["ら", "せ", "て", "よ", "お", "り", "や",
      "え", "そ", "も", "を", "ふ", "つ", "ろ",
      "ほ", "こ", "し", "あ", "わ", "ち", "ま", "な", "き", "み", "の",
      "た", "ね", "す", "ん", "と", "ひ", "へ", "む", "う", "は", "く",
      "る", "け", "ぬ", "に", "さ", "ゆ", "れ", "め", "か", "い",
      "ら", "せ", "て", "よ", "お"]
      let hiraganaArrayTrans = ["ra", "se", "te", "yo", "o", "ri", "ya",
      "e", "so", "mo", "wo", "fu", "tsu", "ro",
      "ho", "ko", "shi", "a", "ne", "chi", "ma", "na", "ki", "mi", "no",
      "ta", "ne", "su", "n", "to", "hi", "he", "mu", "u", "ha", "ku",
      "ru", "ke", "nu", "ni", "sa", "yu", "re", "me", "ka", "i",
      "ra", "se", "te", "yo", "o"]
      let startVar = Math.floor((Math.random() * 45) + 0);
      let finalArrayHira = hiraganaArray.slice(startVar,startVar+6);
      let finalArrayHiraTrans = hiraganaArrayTrans.slice(startVar,startVar+6);
      let finalArrayHiraConc = finalArrayHira.concat(finalArrayHiraTrans);
      let finalArrayHiraShuff = shuffleArray(finalArrayHiraConc);
      let arr = finalArrayHiraShuff;
      return arr;
    }

  }
  renderSquare(i) {
    return <Square style={{boxSizing: 'border-box'}} value={this.state.squares[i]}
       onClick={ () => this.handleClick(i)} onDoubleClick={ () => this.handleClick2(i)}/>;
  }
  handleChange1=()=>{/*TODO*/
    function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
    function getArray(props){/*TODO*/
      let hiraganaArray = ["ら", "せ", "て", "よ", "お", "り", "や",
      "え", "そ", "も", "を", "ふ", "つ", "ろ",
      "ほ", "こ", "し", "あ", "わ", "ち", "ま", "な", "き", "み", "の",
      "た", "ね", "す", "ん", "と", "ひ", "へ", "む", "う", "は", "く",
      "る", "け", "ぬ", "に", "さ", "ゆ", "れ", "め", "か", "い",
      "ら", "せ", "て", "よ", "お"]
      let hiraganaArrayTrans = ["ra", "se", "te", "yo", "o", "ri", "ya",
      "e", "so", "mo", "wo", "fu", "tsu", "ro",
      "ho", "ko", "shi", "a", "ne", "chi", "ma", "na", "ki", "mi", "no",
      "ta", "ne", "su", "n", "to", "hi", "he", "mu", "u", "ha", "ku",
      "ru", "ke", "nu", "ni", "sa", "yu", "re", "me", "ka", "i",
      "ra", "se", "te", "yo", "o"]
      let startVar = Math.floor((Math.random() * 45) + 0);
      let finalArrayHira = hiraganaArray.slice(startVar,startVar+6);
      let finalArrayHiraTrans = hiraganaArrayTrans.slice(startVar,startVar+6);
      let finalArrayHiraConc = finalArrayHira.concat(finalArrayHiraTrans);
      let finalArrayHiraShuff = shuffleArray(finalArrayHiraConc);
      let arr = finalArrayHiraShuff;
      return arr;
    }

    this.setState({
        val1: true,
        val2: false,
        tablica: getArray(),
        counter: 0,
      })
  }

  handleChange2=()=>{/*TODO*/
    function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
    function getArray2(props){
      let katakanaArray = ["ツ", "ソ", "ヒ", "ヨ", "コ", "ネ", "ワ",
      "キ", "カ", "ヘ", "ト", "ホ", "ニ", "ノ", "ア", "ル", "ユ", "マ",
      "ク", "ラ", "ヲ", "ヌ", "ス", "セ", "サ", "ヤ", "オ", "ロ",
      "ハ", "メ", "フ", "テ", "チ", "リ", "ウ", "モ", "イ", "レ",
      "エ", "タ", "ナ", "ム", "ミ", "ケ", "シ", "ツ", "ソ", "ヒ", "ヨ", "コ"]
      let katakanaArrayTrans = ["tsu", "so", "hi", "yo", "ko", "ne", "fu",
      "ki", "ka", "he", "to", "ho", "ni", "no", "a", "ru", "yu", "ma",
      "ku", "ra", "wo", "nu", "su", "se", "sa", "ya", "o", "ro",
      "hs", "me", "fu", "te", "chi", "ri", "u", "mo", "i", "re",
      "e", "ta", "na", "mu", "mi", "ke", "shi", "tsu", "so", "hi", "yo", "ko"]
      let startVar = Math.floor((Math.random() * 44) + 0);
      let finalArrayKata = katakanaArray.slice(startVar,startVar+6);
      let finalArrayKataTrans = katakanaArrayTrans.slice(startVar,startVar+6);
      let finalArrayKataConc = finalArrayKata.concat(finalArrayKataTrans);
      let finalArrayKataShuff = shuffleArray(finalArrayKataConc);
      let arr = finalArrayKataShuff;
      return arr;
    }
      this.setState({
        val1: false,
        val2: true,
        tablica: getArray2(),
        counter: 0,
      })
  }
  handleClickReload=()=>{
  window.location.reload()
  }
  handleClick(i) {
    this.setState({
      counter: this.state.counter+1,
      selectedCounter: this.selectedCounter+1,
    })
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
      if(this.state.klikniete.length==2||this.state.para==''){
        let squaresNew = this.state.squares.slice();
        this.setState({squares: Array(12).fill(null),
          klikniete: [],
        backgroundImage: 'url("./sushiroll.jpg")'})
      }
    },2000)
    if(this.state.klikniete.length>2){
      this.setState({squares: Array(12).fill(null), klikniete:[]})
    }

    // if(this.state.klikniete.length===2&&this.state.tablica.indexOf(this.state.klikniete[this.state.klikniete.length-1])===this.state.tablica.indexOf(this.state.klikniete[this.state.klikniete.length-2])+6||
    // this.state.klikniete.length===2&&this.state.tablica.indexOf(this.state.klikniete[this.state.klikniete.length-1])===this.state.tablica.indexOf(this.state.klikniete[this.state.klikniete.length-2])-6){
    //   console.log('para');
    //   console.log(i);
    //   this.state.pary.push(i);
    // }

    if(this.state.klikniete.length===2&&this.state.hira.indexOf(this.state.klikniete[this.state.klikniete.length-1])===this.state.hira.indexOf(this.state.klikniete[this.state.klikniete.length-2])+46||
    this.state.klikniete.length===2&&this.state.hira.indexOf(this.state.klikniete[this.state.klikniete.length-1])===this.state.hira.indexOf(this.state.klikniete[this.state.klikniete.length-2])-46
  ||this.state.klikniete.length===2&&this.state.kata.indexOf(this.state.klikniete[this.state.klikniete.length-1])===this.state.kata.indexOf(this.state.klikniete[this.state.klikniete.length-2])+45||
  this.state.klikniete.length===2&&this.state.kata.indexOf(this.state.klikniete[this.state.klikniete.length-1])===this.state.kata.indexOf(this.state.klikniete[this.state.klikniete.length-2])-45){
      console.log('para');
      console.log(i);
      this.state.pary.push(i);

    }



  }
  render(i) {
    let tablicaSquare = [
      <Square value={this.state.squares[0]}
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
                      onClick={ () => this.handleClick(11)}/>
              ]



              if(this.state.klikniete.length===2&&this.state.hira.indexOf(this.state.klikniete[this.state.klikniete.length-1])===this.state.hira.indexOf(this.state.klikniete[this.state.klikniete.length-2])+46||
              this.state.klikniete.length===2&&this.state.hira.indexOf(this.state.klikniete[this.state.klikniete.length-1])===this.state.hira.indexOf(this.state.klikniete[this.state.klikniete.length-2])-46
              ||this.state.klikniete.length===2&&this.state.kata.indexOf(this.state.klikniete[this.state.klikniete.length-1])===this.state.kata.indexOf(this.state.klikniete[this.state.klikniete.length-2])+45||
              this.state.klikniete.length===2&&this.state.kata.indexOf(this.state.klikniete[this.state.klikniete.length-1])===this.state.kata.indexOf(this.state.klikniete[this.state.klikniete.length-2])-45){
                console.log('tu kod na zatrzymanie kart');
                console.log(this.state.tablica);
              console.log(this.state.klikniete);
              console.log(this.state.tablica.indexOf(this.state.klikniete[1]));
                tablicaSquare[this.state.tablica.indexOf(this.state.klikniete[1])]=<Square value={'OK'}/>
                tablicaSquare[this.state.tablica.indexOf(this.state.klikniete[0])]=<Square value={'OK'}/>

              }



//       for (var i = 0; i < 12; i++) {
//         console.log(this.state.pary);
//         if(this.state.pary.indexOf(i)>=0){
//           tablicaSquare[i]=<Square value={this.state.tablica[i]}/>
//           tablicaSquare[
// // indeks tego samego czyli +46 lub minus w this state hira ale to w tablicy
//             this.state.tablica.indexOf(this.state.hira[this.state.hira.indexOf(i)+46])
//           ]=<Square value={'ddddd'}/>
//             tablicaSquare[
//   // indeks tego samego czyli +46 lub minus w this state hira ale to w tablicy
//               this.state.tablica.indexOf(this.state.hira[this.state.hira.indexOf(i)-46])
//             ]=<Square value={'ddddd'}/>
//         }
//       }
      // for (var i = 6; i < 12; i++) {
      //   console.log(this.state.pary);
      //   if(this.state.pary.indexOf(i)>=0){
      //     tablicaSquare[i]=<Square value={this.state.tablica[i]}/>
      //     tablicaSquare[i-6]=<Square value={this.state.tablica[i-6]}/>
      //   }
      // }
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
          <p>moves: {this.state.counter}</p>
        </div>
        <div className="status">
          {tablicaSquare}
        </div>
        <input id='play' type="button" value="play again" onClick={this.handleClickReload}></input>
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
