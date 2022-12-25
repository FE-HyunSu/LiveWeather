import React from 'react';
import { ErrorBoxUI } from './style';

const ErrorBox = () => {
  return (
    <>
      <ErrorBoxUI>
        <div>
          <p>
            <strong>ERROR</strong>
            잠시 후에 다시 시도해 주세요.
            <em>브라우저의 위치 서비스 권한을 허용해 주세요.</em>
          </p>
        </div>
      </ErrorBoxUI>
    </>
  );
};
export default ErrorBox;
