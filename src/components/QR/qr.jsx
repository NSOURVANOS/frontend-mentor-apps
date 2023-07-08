import { Card, CardText, CardTitle, CardTextContainer, CardImage } from "./Card";
// backgroundColor: "hsl(219, 76%, 92%)"

export const QR = () => {
  return <div style={{
    backgroundColor: "hsl(219, 76%, 92%)",
    display: "flex",
    justifyContent: "center",
    height: "40rem"
  }}>

    <Card>
      <CardImage />
      <CardTitle title={"Improve your front-end skills by building projects"} />
      <CardTextContainer>
        <CardText
          text={"Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"}
        />
      </CardTextContainer>
    </Card>
  </div>
}