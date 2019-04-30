const handler = async (event: any = {}): Promise<any> => {
  console.log("Received event", event);
  console.log("Return message: " + process.env.message);
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: process.env.message
    })
  };
};

export default handler;
