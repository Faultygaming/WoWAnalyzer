import React from 'react';

import { Tyndi, Zeboot } from 'CONTRIBUTORS';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';
import { change, date } from 'common/changelog';

export default [
  change(date(2020, 10, 27), 'Converted modules to TypeScript; Updated Statistic Boxes', Tyndi),
  change(date(2020, 10, 20), <>Added <SpellLink id={SPELLS.INVIGORATING_SHADOWDUST.id} /> Legendary</>, [Tyndi]),
  change(date(2020, 10, 19), <>Added <SpellLink id={SPELLS.ESSENCE_OF_BLOODFANG.id} /> Legendary</>, [Tyndi]),
  change(date(2020, 10, 18), 'Converted legacy listeners to new event filters', Zeboot),
  change(date(2020, 10, 16), <>Added <SpellLink id={SPELLS.THE_ROTTEN.id} /> Legendary. And Removed Nightblade.</>, [Tyndi]),
  change(date(2020, 10, 2), 'Added Akaari\'s Soul Fragment Legendary', [Tyndi]),
];
