import React from 'react';

const NameFunction = ({firstName, lastName, age, exp}) => (
<div>
   My Name is <strong>{firstName} {lastName}</strong>. I am {age} years old and have {exp} years of working experience.
</div>
);

export default NameFunction