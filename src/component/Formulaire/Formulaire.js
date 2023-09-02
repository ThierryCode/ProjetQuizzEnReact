import React from 'react';

export default function Formulaire({ handleSubmit }) {
  return (
    <div>
      <form className="formQuizz" onSubmit={handleSubmit}>
            <div className="questionBlock">
                <h4>Qui est l'empereur de France le 2 décembre 1804 ?</h4>
                <div>
                    <input type="radio" id="Clovis" name="q1" value="a" checked/>
                    <label htmlFor="Clovis">Clovis</label>
                </div>
                <div>
                    <input type="radio" id="Lincoln" name="q1" value="b"/>
                    <label htmlFor="Lincoln">Abraham Lincoln</label>
                </div>
                <div>
                    <input type="radio" id="Bonaparte" name="q1" value="c"/>
                    <label htmlhtmlFor="Bonaparte">Napoléon Bonaparte</label>
                </div>
            </div>
            <div className="questionBlock">
                <h4>Quelle est la date de l'indépendance des USA ?</h4>
                <div>
                    <input type="radio" id="date1" name="q2" value="a" checked/>
                    <label htmlFor="date1">4 Juillet 1776</label>
                </div>
                <div>
                    <input type="radio" id="date2" name="q2" value="b"/>
                    <label htmlFor="date2">18 Avril 1856</label>
                </div>
                <div>
                    <input type="radio" id="date3" name="q2" value="c"/>
                    <label htmlFor="date3">30 Juin 1925</label>
                </div>
            </div>
            <div className="questionBlock">
                <h4>La chute de l'empire romain se situe en ?</h4>
                <div>
                    <input type="radio" id="date4" name="q3" value="a" checked/>
                    <label htmlFor="date4">15 ap JC</label>
                </div>
                <div>
                    <input type="radio" id="date5" name="q3" value="b"/>
                    <label htmlFor="date5">395 ap JC</label>
                </div>
                <div>
                    <input type="radio" id="date6" name="q3" value="c"/>
                    <label htmlFor="date6">-740 av JC</label>
                </div>
            </div>
            <div className="questionBlock">
                <h4>Quelle est la capitale de la Slovenie ?</h4>
                <div>
                    <input type="radio" id="Ljubljana" name="q4" value="a" checked/>
                    <label htmlFor="Ljubljana">Ljubljana</label>
                </div>
                <div>
                    <input type="radio" id="Belgrade" name="q4" value="b"/>
                    <label htmlFor="Belgrade">Belgrade</label>
                </div>
                <div>
                    <input type="radio" id="Bratisalva" name="q4" value="c"/>
                    <label htmlFor="Bratisalva">Bratisalva</label>
                </div>
            </div>
            <div className="questionBlock">
                <h4>Combien d'habitant compte l'Irlande en 2020 ?</h4>
                <div>
                    <input type="radio" id="m1" name="q5" value="a" checked/>
                    <label htmlFor="m1">1.365M</label>
                </div>
                <div>
                    <input type="radio" id="m2" name="q5" value="b"/>
                    <label htmlFor="m2">21M</label>
                </div>
                <div>
                    <input type="radio" id="m3" name="q5" value="c"/>
                    <label htmlFor="m3">4.9M</label>
                </div>
            </div>
            <button type="submit">Validez vos choix!</button>
      </form>
    </div>
  );
}
