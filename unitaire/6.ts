/**
 * Vous avez ici une classe implémentant la design pattern observer et une autre classe qui vous permet de générer des observers (ObserverImplementation n'est pas à tester, seulement Subject)
 * Vérifiez que la classe fonctionne comme prévu
 *
 * Attention pensez bien à reset la classe avant chaque test, ou pour différents groupes de tests (sinon les informations persistent dans la classe)
 *
 */

export interface Observer {
  update(data: any): void;
}

export class Subject {
  private observers: Observer[] = [];

  getObservers(): Observer[] {
    return this.observers;
  }

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(data: any): void {
    for (const observer of this.observers) {
      observer.update(data);
    }
  }
}

export class ObserverImplementation implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(data: any): void {
    console.log(`${this.name} received update with data: ${data}`);
  }
}
