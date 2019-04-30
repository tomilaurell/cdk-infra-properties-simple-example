const handler = async (event: any = {}): Promise<any> => {
  console.log("Received event", event);
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Hello from Ireland"
    })
  };
};

export default handler;
