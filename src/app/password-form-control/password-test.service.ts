import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordTestService {
  par: string[] = new Array(3)
  colors: string[] = ['gray', 'red', 'yellow', 'green']
  constructor() { }

  checkStrenght(pass: string){
    this.setColor(0, 3)
    if(pass.length > 0 && pass.length < 8){
      this.setColor(1, 3)
    }
    else {
      this.setColor(this.checkPass(pass))
    }
    return this.par
  }

  checkPass(pass: string){
    const letters = /[A-Za-z]+/.test(pass)
    const symbols = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pass)
    const numbers = /[0-9]+/.test(pass)

    const conditions = [letters, symbols, numbers]

    let passedConditions = 0

    for(let cond of conditions){
      passedConditions += cond === true ? 1 : 0
    }

    return passedConditions
  }

  setColor(color: number, count: number=color){
    for(let i=0; i < count; i++){
      this.par[i] = this.colors[color]
    }
  }
}
