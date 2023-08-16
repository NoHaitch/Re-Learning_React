function Message(){
    const name = 'Francisco';
    if (name)
      return <h1>Hello {name} </h1>
    return <h1>The Message</h1>;
}

export default Message;