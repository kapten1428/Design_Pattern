/* Example Source code from :
https://blog.fullstacktraining.com/factory-pattern-in-typescript/
-------------------------------------------------------------------*/

import { SuperHeroFactory } from './factory_pattern/hero-factory/superhero-factory';
import { throws } from 'assert';

const createHero = new SuperHeroFactory();

const thor = createHero.createSuperHero('hero');

thor.attacked(30);