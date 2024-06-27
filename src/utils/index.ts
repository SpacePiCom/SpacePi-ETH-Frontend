export const ellipsisMiddle = (
  text: string,
  minLength: number = 3,
  maxLength: number = 2
): string => {
  if (text?.length > maxLength) {
    return (
      text?.slice(0, minLength) + '...' + text?.slice(text?.length - maxLength)
    )
  } else {
    return text
  }
}

export const detectionMobileDevice = () => {
  if (window.innerWidth <= 768) {
    return true
  } else {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  }
}
