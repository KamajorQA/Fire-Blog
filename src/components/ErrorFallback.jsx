import { Button } from 'antd';
import { useErrorBoundary } from 'react-error-boundary';

function ErrorFallback() {
  const { resetBoundary } = useErrorBoundary();
  return (
    <section className="flexCenter contentWrapper">
      <h1>An error occured!</h1>
      <Button onClick={resetBoundary}>Arise anew !</Button>
    </section>
  );
}

export { ErrorFallback };
