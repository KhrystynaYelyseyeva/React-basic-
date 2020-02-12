import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            count: 0,
            text_task_7: 'you enter less than 6 characters',
            text_task_10: '',
            text_task_11: '',
            width: 50,
            text_task_13: 50,
        }
        this.task_1 = this.task_1.bind(this);
        this.task_3 = this.task_3.bind(this);
        this.task_4 = this.task_4.bind(this);
        this.task_5 = this.task_5.bind(this);
        this.task_6 = this.task_6.bind(this);
        this.task_7 = this.task_7.bind(this);
        this.task_10 = this.task_10.bind(this);
        this.task_11 = this.task_11.bind(this);
        this.task_12 = this.task_12.bind(this);
        this.task_13 = this.task_13.bind(this);
        this.task_14 = this.task_14.bind(this);
    }


    task_1() {
        console.log('button work');
        this.setState({text: 'button work'});
    }

    task_3() {
        let count = this.state.count;
        count++;
        this.setState({count: count});
    }

    task_4() {
        this.setState({count: 0});
    }

    task_5() {
        console.log('move');
    }

    task_6(e) {
        console.log(e.target.getAttribute("data"));
    }

    task_7(e) {
        if (e.target.value.length > 5) this.setState({text_task_7: e.target.value});
    }

    task_9(e) {
        if (e.target.checked) console.log("checkbox checked");
        else console.log("checkbox unchecked");
    }

    task_10(e) {
        this.setState({text_task_10: e.target.value});
    }

    task_11(e) {
        this.setState({text_task_11: e.target.value});
    }

    task_12(e) {
        if (e.target.name === "grow") {
            let width = this.state.width;
            width += 3;
            this.setState({width: width});
            document.querySelector('#yellow-div').style.width = width + "px";
        } else {
            document.querySelector('#yellow-div').style.width = "50px";
        }
    }

    task_13(e) {
        this.setState({text_task_13: e.target.value});
    }

    task_14(e) {
if(e.target.innerText==="Hidden"){
    e.target.innerText="Show image";
    document.querySelector("#img_task_14").style.visibility="hidden";
}else{
    e.target.innerText="Hidden";
    document.querySelector("#img_task_14").style.visibility="visible";
}
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h3>Tasks 1,2</h3>
                    <p><b>Task 1</b> Создайте кнопку.
                        Повесьте на нее событие click. При клике выводите в консоль
                        сообщение - button work.</p>

                    <p><b>Task 2</b> Добавьте параграф.
                        При клике по кнопке - выводите текст button work в параграф.</p>
                    <button onClick={this.task_1}>PUSH</button>
                    <p>{this.state.text}</p>
                    <hr/>
                    <h3>Tasks 3,4</h3>
                    <p><b>Task 3</b> Добавьте кнопку с текстом Count.
                        Создайте state.count = 0 и выведите его на
                        страницу в параграф. Добавьте на кнопку Count событие,
                        которое будет вызывать метод
                        увеличивающий state.count на единицу при каждом нажатии.</p>

                    <p><b>Task 4</b> Добавьте кнопку ResetCount обновляющую count в предыдущей задаче.</p>
                    <button onClick={this.task_3}>Count</button>
                    <button onClick={this.task_4}>ResetCount</button>
                    <p>{this.state.count}</p>
                    <hr/>
                    <h3>Task 5</h3>
                    <p><b>Task 5</b> Добавьте div зеленого цвета.
                        Повесьте на него событие mousemove и при срабатывании
                        выводите в консоль слово move.</p>
                    <div style={{
                        "backgroundColor": "green",
                        "width": "50px",
                        "height": "50px",
                        "margin": "0 auto"
                    }}
                         onMouseMove={this.task_5}></div>
                    <hr/>
                    <h3>Task 6</h3>
                    <p><b>Task 6</b> Добавьте 2 кнопки с надписями atr1 и atr2.
                        Задайте им атрибуты data = atr-1 и data
                        = atr-2 соответственно.
                        Добавьте по клику на кнопке метод (один и тот же).
                        Метод должен выводить
                        содержимое атрибута data в консоль.</p>
                    <button data="atr-1" onClick={this.task_6}>atr1</button>
                    <button data="atr-2" onClick={this.task_6}>atr2</button>
                    <hr/>
                    <h3>Tasks 7,8</h3>
                    <p><b>Task 7</b> Добавьте input и параграф.
                        При вводе текста в input - выводите в параграфе вводимый
                        текст.</p>

                    <p><b>Task 8</b> Усложним задачу.
                        Если длина вводимого текста меньше 6 символов - то выводите на
                        страницу предупреждение о том, что длина меньше 6.</p>
                    <input type="text" onInput={this.task_7}/>
                    <p>{this.state.text_task_7}</p>
                    <hr/>
                    <h3>Task 9</h3>
                    <p><b>Task 9</b> Добавьте checkbox - при изменении его
                        состояния выводите checkbox checked или checkbox unchecked в консоль.</p>
                    <input type="checkbox" onChange={this.task_9}/>
                    <hr/>
                    <h3>Task 10</h3>
                    <p><b>Task 10</b> Добавьте 3 radiobutton с одним именем.
                        При изменении состояния radiobutton выводите value выбранного на страницу.</p>
                    <input type="radio" name="task_10" value="radiobutton-1" onChange={this.task_10}/>
                    <input type="radio" name="task_10" value="radiobutton-2" onChange={this.task_10}/>
                    <input type="radio" name="task_10" value="radiobutton-3" onChange={this.task_10}/>
                    <p>{this.state.text_task_10}</p>
                    <hr/>
                    <h3>Task 11</h3>
                    <p><b>Task 11</b> Добавьте выпадающий список.
                        При изменении состояния - выводите value выбранного на страницу.</p>
                    <select value={this.state.text_task_11} onChange={this.task_11}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <p>{this.state.text_task_11}</p>
                    <hr/>
                    <h3>Task 12</h3>
                    <p><b>Task 12</b> Добавьте div и кнопку.
                        При нажатии кнопки - увеличивайте ширину div на 3 px.
                        Добавьте кнопку Reset позволяющую сбрасывать состояние до начальной ширины.</p>
                    <button name='grow' onClick={this.task_12}>Grow</button>
                    <button name='reset' onClick={this.task_12}>Reset</button>
                    <div id="yellow-div" style={{
                        "backgroundColor": "yellow",
                        "width": "50px",
                        "height": "50px",
                        "margin": "10px auto"
                    }}></div>
                    <hr/>
                    <h3>Task 13</h3>
                    <p><b>Task 13</b> Добавьте полнузок.
                        При изменении ползунка выводите его value на страницу.</p>
                    <form>
                        0<input type="range" id="a" value={this.state.text_task_13} onChange={this.task_13}/>100
                        <output style={{"display": "block"}}>{this.state.text_task_13}</output>
                    </form>
                    <hr/>
                    <h3>Task 14</h3>
                    <p><b>Task 14</b> Добавьте кнопку и изображение.
                        При клике на кнопку скрывайте изображение, при повторном клике - показывайте.</p>
                    <button onClick={this.task_14}>Hidden</button>
                    <div id="img_task_14" style={{
                        "backgroundImage": "url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/d0741769404939.5b7fdb94806c1.jpg)",
                        "backgroundRepeat": "no-repeat",
                        "backgroundPosition": "center",
                        "backgroundSize": "cover",
                        "width": "200px",
                        "height": "200px",
                        "margin": "0 auto"
                    }}></div>
                </header>
            </div>
        );
    }
}

export default App;
