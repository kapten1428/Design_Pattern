import { Hero } from './hero';

export class SuperHeroFactory {

    createSuperHero(heroOptions) {
        if(heroOptions === 'hero') {
            return new Hero();
        }
    }
}