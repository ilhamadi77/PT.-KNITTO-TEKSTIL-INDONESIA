function palindrom(str: string): any{
  let text: string = str.toLowerCase()
  let reverseText: any = text.split("").reverse().join("")

  if (text === reverseText) {
    return console.log("palindrom guys")
  } else {
    return console.log("not palindrom guys")
  }
}

palindrom("helleH")