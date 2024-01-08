/**
 * Ecrivez les tests pour cette classe en utilisant ce que l'on a fait dans les exercices précédents
 */

import axios from 'axios';

export interface EventOptions {
  name: string;
  place: string;
  time: string;
  date: string;
  description: string;
  artist: string;
}

export class Event {
  public name: string;
  public place: string;
  public time: string;
  public date: string;
  public description: string;
  public artist: string;

  constructor(options: EventOptions) {
    this.name = options.name;
    this.place = options.place;
    this.time = options.time;
    this.date = options.date;
    this.description = options.description;
    this.artist = options.artist;
  }

  public isToday(): boolean {
    const today = new Date();
    const eventDate = new Date(this.date);
    return (
      eventDate.getDate() === today.getDate() &&
      eventDate.getMonth() === today.getMonth() &&
      eventDate.getFullYear() === today.getFullYear()
    );
  }

  public async postEventId(): Promise<void> {
    const eventId = this.name.replace(/\s/g, '-').toLowerCase();

    try {
      await axios.post('https://fake-api.com/fake-do-not-use', {
        id: eventId,
      });
    } catch (error) {
      Sentry.handle(error);
      // Send error to Sentry or other error logging service
      // sentry.captureException(error);
    }
  }

  // Factory method to create event objects
  public static createEvent(options: EventOptions): Event {
    return new Event(options);
  }
}

export class Sentry {
  static handle(error: any) {
    console.log(
      'this is just there so you can spy this function to pass your tests'
    );
  }
}
