$(document).ready(function () {
    // global items
    $(`body`).addClass(`contianer bg-dark`);
    $(`header`).addClass(`row justify-content-center`).append(`<div></div`);
    $(`div`).text(`Generate Die`).addClass(`col col-4 btn bg-primary m-1 gen`);
    $('main').addClass(`row bg-dark justify-content-center my-3`).append(`<div>`);
    $(`main div`).addClass(`dieHold row justify-content-center`);
    $(`main`).append('<div id="rr">')
    $(`main`).append(`<div id=sum></div>`);

    let diceGen = document.querySelector(`div.gen`);
    let rr = document.getElementById("rr");
    let sumBtn = document.getElementById("sum");
    let dieCount = 0;
    let diceArrayVal = [];
    let buttonDefine = `col col-4 btn bg-primary text-center borader boarder rounded-2 m-3`;
    let dieDefine = `die bg-light text-center borader boarder rounded-2 m-2`;

    class Die {
        constructor(add, search,) {
            this.add = add;
            this.search = search;
            $(`div.dieHold`).append(this.add);
            // die function
            $(this.search).addClass(dieDefine).text(this.roll()).width(`100px`).height(`100px`).attr(`value`, $(this.search).text()).on(`click`, () => {
                this.reRoll();
                this.arrUpdate();
            }).on(`dblclick`, () => {
                this.remove();
                this.arrSplice();
            });
            this.arrPush();
            // make button for reRoll
            $(rr).addClass(buttonDefine)
                .text(`reroll all dice`)
                .on(`click`, () => {
                    this.reRoll();
                    this.arrSplice();
                    this.arrUpdate();
                });
            $(sumBtn).addClass(buttonDefine)
                .text(`test for Sum - work in progress`).on(`click`, ()=>console.log(diceArrayVal))
        }

        roll() {
            return Math.floor(Math.random() * (6 - 1)) + 1;
        }
        reRoll() {
            $(this.search).text(this.roll()).attr(`value`, $(this.search).text());
        }
        arrPush() {
            diceArrayVal.push(parseInt($(this.search).attr(`value`)));
        }
        arrUpdate() {
            let value = () => parseInt($(this.search).attr(`value`));
            let index = () => parseInt($(this.search).index());
            diceArrayVal[index()] = value();
        }
        arrSplice() {
            let index = () => parseInt($(this.search).index());
            diceArrayVal.splice(index(), index());

        }
        remove() {
            $(this.search).remove();
        }
        sumDice() {
            diceArrayVal.reduce((acc, val) => {
                return acc + val
            });
        }
        test(){
            console.log(`test`)
        }
    }
    diceGen.addEventListener('click', function () {
        new Die(`<div id=${dieCount}></div>`, `div#${dieCount}`);
        ++dieCount;
    });


});
