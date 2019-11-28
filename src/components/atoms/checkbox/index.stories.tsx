import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import Checkbox from '.';
import Label from '../label';

storiesOf('Checkbox', module)
  .add('Checkbox default', () => <Checkbox />)
  .add('Checkbox checked', () => <Checkbox checked />)
  .add('Checkbox list', () => {
    // let selected = {};
    const [selected, setSelected] = React.useState({});
    const transactions = [
      { id: 'a1', label: 'City of Angels' },
      { id: 'a2', label: 'When Harry met Sally' },
      { id: 'a3', label: 'In the Cut' },
    ];

    const onChange = ({ target: { id, checked } }) => {
      setSelected({ [id]: checked });
    };
    return (
      <>
        {transactions.map((t, i) => (
          <React.Fragment key={`${t.id}_${i}`}>
            <Checkbox id={t.id} checked={selected[t.id] || false} onChange={onChange} />
            <Label htmlFor={t.id}>
              {t.label} - {selected[t.id]}
            </Label>
          </React.Fragment>
        ))}
      </>
    );
  });
