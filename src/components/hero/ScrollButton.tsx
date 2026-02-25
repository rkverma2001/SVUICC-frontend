import ScrollToMainContentButton from './ScrollToMainContentButton';

const ScrollButton = () => {
  return (
<div>

<ScrollToMainContentButton onClick={() => console.log('Scrolling to main content!')} />
</div>
   
  )
}

export default ScrollButton;