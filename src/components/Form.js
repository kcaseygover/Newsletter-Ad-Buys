import React from 'react';
import PropTypes from 'prop-types';

import Publisher from './Publisher';
import DateAdded from './DateAdded';
import PublishDate from './PublishDate';
import Publication from './Publication';
import Cost from './Cost';
import Reach from './Reach';
import Sponsorship from './Sponsorship';


function Form(props) {
  const { onChangeCost } = props;
    // onSubmit={e => {
    //     e.preventDefault()
    //     dispatch(addAdBuy(input.value))
    //   }

// console.log(store.getState());
  console.log('props in form component?', props);

  return (
    <form>
      <h1>Newsletter Ads Buy Tracking Form</h1>
      <Publisher

      />
      <Publication/>
      <Sponsorship />
      <Reach/>
      <Cost

      />
      <PublishDate/>
      <DateAdded />
      <input type="submit" value="Submit" />
    </form>
  )
}




Form.propTypes = {

  onChangeCost: PropTypes.func,

};

export default Form;
