export default function handleMaxBar(windowWidth) {
    if (windowWidth > 1439) {
      return 30;
    } else if (windowWidth > 1023) {
      return 25;
    } else if (windowWidth > 767) {
      return 20;
    } else if (windowWidth > 639) {
      return 15;
    } else {
      return 10;
    }
  }