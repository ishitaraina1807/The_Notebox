import React from 'react';

function Alert(props) {
  const capitalize = (word) => {
    if (word === 'danger') {
      word = 'error';
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div className={`bg-${props.alert.type}-100 border-l-4 border-${props.alert.type}-500 text-${props.alert.type}-700 p-4`} role="alert">
          <p className="font-bold">{capitalize(props.alert.type)}</p>
          <p>{props.alert.msg}</p>
        </div>
      )}
    </div>
  );
}

export default Alert;
