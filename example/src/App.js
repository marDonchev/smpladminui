import React, { Component } from "react";

import {
  ButtonComponent as Button,
  LayoutComponent as Layout,
  PageComponent as Page,
  DropmenuComponent as Dropmenu,
  CardComponent as Card,
  ListComponent as List,
  PopupComponent as Popup,
  IconComponent as Icon,
  WrapperComponent as Wrapper,
  ToggleComponent as Toggle,
  ImagesListComponent as ImagesList,
  scss_variables as SCSS_Variables
} from "smpladminui";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false,
      popup2Visible: false,
      popup3Visible: false,
      toggleValue: false
    };
  }

  togglePopupVisible = e => {
    // console.info("togglePopupVisible e", e);
    this.setState({ popupVisible: !this.state.popupVisible });
  };
  togglePopup2Visible = e => {
    // console.info("togglePopup2Visible e", e);
    this.setState({ popup2Visible: !this.state.popup2Visible });
  };
  togglePopup3Visible = e => {
    // console.info("togglePopup3Visible e", e);
    this.setState({ popup3Visible: !this.state.popup3Visible });
  };

  render() {
    const Iconslist = [
      [
        <Icon type="bookmark_off" variant="grey" />,
        "bookmark_off",
        "grey",
        <code>{`<Icon type="bookmark_off" variant="grey"/>`}</code>
      ],
      [
        <Icon type="bookmark_on" variant="grey" />,
        "bookmark_on",
        "grey",
        <code>{`<Icon type="bookmark_on" variant="grey"/>`}</code>
      ],
      [
        <Icon type="collections" variant="grey" />,
        "collections",
        "grey",
        <code>{`<Icon type="collections" variant="grey"/>`}</code>
      ],
      [
        <Icon type="dashboard" variant="grey" />,
        "dashboard",
        "grey",
        <code>{`<Icon type="dashboard" variant="grey"/>`}</code>
      ],
      [
        <Icon type="edit" variant="grey" />,
        "edit",
        "grey",
        <code>{`<Icon type="edit" variant="grey"/>`}</code>
      ],
      [
        <Icon type="files" variant="grey" />,
        "files",
        "grey",
        <code>{`<Icon type="files" variant="grey"/>`}</code>
      ],
      [
        <Icon type="listtype_cards" variant="grey" />,
        "listtype_cards",
        "grey",
        <code>{`<Icon type="listtype_cards" variant="grey"/>`}</code>
      ],
      [
        <Icon type="listtype_list" variant="grey" />,
        "listtype_list",
        "grey",
        <code>{`<Icon type="listtype_list" variant="grey"/>`}</code>
      ],
      [
        <Icon type="logout" variant="grey" />,
        "logout",
        "grey",
        <code>{`<Icon type="logout" variant="grey"/>`}</code>
      ],
      [
        <Icon type="projectsettings" variant="grey" />,
        "projectsettings",
        "grey",
        <code>{`<Icon type="projectsettings" variant="grey"/>`}</code>
      ],
      [
        <Icon type="settings" variant="grey" />,
        "settings",
        "grey",
        <code>{`<Icon type="settings" variant="grey"/>`}</code>
      ],
      [
        <Icon type="static" variant="grey" />,
        "static",
        "grey",
        <code>{`<Icon type="static" variant="grey"/>`}</code>
      ],
      [
        <Icon type="structure" variant="grey" />,
        "structure",
        "grey",
        <code>{`<Icon type="structure" variant="grey"/>`}</code>
      ],
      [
        <Icon type="threedots" variant="grey" />,
        "threedots",
        "grey",
        <code>{`<Icon type="threedots" variant="grey"/>`}</code>
      ]
    ];

    let SCSSList = [];
    Object.keys(SCSS_Variables).forEach(item => {
      SCSSList.push([item, SCSS_Variables[item]]);
    });

    return (
      <div>
        <Wrapper>
          <h2 style={{ fontSize: "3rem" }}>smpladminui - Simple Admin UI</h2>
          <h1>React Components Library</h1>
          This is a set of simple UI components that can help you build simple
          Admin interface with a basic functionality.
          <br />
          <br />
          <hr />
          <h4>Installation</h4>
          <code>
            npm install <strong>smpladminui</strong> --save-dev
          </code>
          <br />
          <h4>Usage</h4>
          You can import all the components into your application using the
          following lines:
          <pre>
            <code>
              {`import {
  ButtonComponent as Button,
  LayoutComponent as Layout,
  PageComponent as Page,
  DropmenuComponent as Dropmenu,
  CardComponent as Card,
  ListComponent as List,
  PopupComponent as Popup,
  IconComponent as Icon,
  WrapperComponent as Wrapper,
  scss_variables as SCSS_Variables
} from "smpladminui";`}
            </code>
          </pre>
          <br />
          Or you can import only single (or set) of the components if you like:
          <br />
          <br />
          <code>
            {`import { ButtonComponent as Button } from "smpladminui";`}
          </code>
          <br />
          <br />
          And somewhere on your render code you can type this:
          <br />
          <br />
          <code>{`<Button primary>+ add new</Button>`}</code>
          <br />
          <br />
          This will visualize a button from the smpladminui set of components.
          <br />
          <br />
          <hr />
          Below you can see a list of all the components in their small
          variations. <br />
          For more detailed information about the props please visit the{" "}
          <a
            href="https://www.npmjs.com/package/smpladminui"
            target="_blank"
            rel="noopener noreferrer"
          >
            NPM page
          </a>
          .
          <br />
          <br />
          <br />
        </Wrapper>
        <br />
        <br />
        <br />
        <Wrapper>
          <hr />
          <br />
          <h1>Button</h1>
          <br />
        </Wrapper>
        <div>
          <Button primary onClick={evt => alert("test")}>
            Primary Button
          </Button>
          <Button success label={"Success"} />
          <Button label={"Danger"} danger />
          <Button title="This is the title of the button">Normal Button</Button>
          <Button />
          <Button primary>+ add new</Button>
          <Button processing />
          <Button disabled="disabled">Disabled</Button>
          <Button style={{ border: "1px solid red" }}>Styled</Button>
        </div>

        <Wrapper>
          <hr />
          <br />
          <h1>Toggle</h1>
        </Wrapper>
        <div style={{ display: "block" }}>
          <Toggle label="Something here" value={this.state.toggleValue} onToggle={(value) => this.setState({toggleValue: value})}/>
          <Toggle success label="Success" value={this.state.toggleValue} onToggle={(value) => this.setState({toggleValue: value})}/>
          <Toggle primary label="Primary" value={this.state.toggleValue} onToggle={(value) => this.setState({toggleValue: value})}/>
          <Toggle danger label="Danger" value={this.state.toggleValue} onToggle={(value) => this.setState({toggleValue: value})}/>
          <Toggle disabled>Disabled toggle</Toggle>
        </div>
        <div style={{ display: "block" }}>
          <Button label={"Toggle"} onClick={(e)=>this.setState({toggleValue: !this.state.toggleValue})}/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <Wrapper>
          <hr />
          <br />
          <h1>ImagesList</h1>

        <div style={{ display: "block" }}>
          <ImagesList borderColor="#eef3f6" max={4} fffitemStyle={{borderRadius: "100%"}} list={[
            "https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg",
            "https://www.tom-archer.com/wp-content/uploads/2017/03/landscape-photography-tom-archer-2.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KCQSne-FWA1ek_gRsXLF477vrjUfDJcubg&usqp=CAU",
            "https://previews.123rf.com/images/welcomia/welcomia1207/welcomia120700069/14300992-south-dakota-black-hills-landscape-hills-and-trees-nature-photo-collection-south-dakota-u-s-a-.jpg",
            "https://www.tom-archer.com/wp-content/uploads/2018/06/milford-sound-night-fine-art-photography-new-zealand.jpg",
            "https://lh3.googleusercontent.com/qsm1GPWNVY0D2IADaRmDKkQrOmZeDahaAOjuHcW7iZ8XTTJiFNj5nfSa8-2D4RGewn7av_FpEipYlCMQFoQsGjz3=w640-h400-e365-rj-sc0x00ffffff",
            "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/moraine-blue-lake-banff-mountain-landscape-canada-pierre-leclerc-photography.jpg",
            "https://cdn2.wanderlust.co.uk/media/1028/cropped-shutterstock_497799013.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=131915974290000000",
            "https://www.pandotrip.com/wp-content/uploads/2016/07/li-Photo-by-Santo-980x572.jpg",
            "https://images.theconversation.com/files/125391/original/image-20160606-13080-s7o3qu.jpg?ixlib=rb-1.1.0&rect=273%2C0%2C2639%2C1379&q=45&auto=format&w=926&fit=clip",
            "https://iso.500px.com/wp-content/uploads/2017/10/PhotographingTwilight_TannerWendellStewart-218136823.jpg",
            "https://i.pinimg.com/originals/0f/e9/c7/0fe9c795d3dac2ec2f57315fb6c43e58.jpg",
            "https://cdn.wallpapersafari.com/31/97/O15IDB.jpg",
          ]} />
        </div>
        <br />
        <br />
        Selectable
        <div style={{ display: "block" }}>
          <ImagesList selectable onSelect={(values) => console.info('values', values)} borderColor="#eef3f6" fffitemStyle={{borderRadius: "100%"}} list={[
            {url:"https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg",name: "Tedt1"},
            {url:"https://www.tom-archer.com/wp-content/uploads/2017/03/landscape-photography-tom-archer-2.jpg",name: "Tedt2"},
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KCQSne-FWA1ek_gRsXLF477vrjUfDJcubg&usqp=CAU",name: "Tedt3"},
            {url:"https://previews.123rf.com/images/welcomia/welcomia1207/welcomia120700069/14300992-south-dakota-black-hills-landscape-hills-and-trees-nature-photo-collection-south-dakota-u-s-a-.jpg",name: "Tedt4"},
            {url:"https://www.tom-archer.com/wp-content/uploads/2018/06/milford-sound-night-fine-art-photography-new-zealand.jpg",name: "Tedt5"},
            {url:"https://lh3.googleusercontent.com/qsm1GPWNVY0D2IADaRmDKkQrOmZeDahaAOjuHcW7iZ8XTTJiFNj5nfSa8-2D4RGewn7av_FpEipYlCMQFoQsGjz3=w640-h400-e365-rj-sc0x00ffffff",name: "Tedt6"},
            {url:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/moraine-blue-lake-banff-mountain-landscape-canada-pierre-leclerc-photography.jpg",name: "Tedt7"},
            {url:"https://cdn2.wanderlust.co.uk/media/1028/cropped-shutterstock_497799013.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=131915974290000000",name: "Tedt8"},
            {url:"https://www.pandotrip.com/wp-content/uploads/2016/07/li-Photo-by-Santo-980x572.jpg",name: "Tedt9"},
            {url:"https://images.theconversation.com/files/125391/original/image-20160606-13080-s7o3qu.jpg?ixlib=rb-1.1.0&rect=273%2C0%2C2639%2C1379&q=45&auto=format&w=926&fit=clip",name: "Tedt10"},
            {url:"https://iso.500px.com/wp-content/uploads/2017/10/PhotographingTwilight_TannerWendellStewart-218136823.jpg",name: "Tedt11"},
            {url:"https://i.pinimg.com/originals/0f/e9/c7/0fe9c795d3dac2ec2f57315fb6c43e58.jpg",name: "Tedt12"},
            {url:"https://cdn.wallpapersafari.com/31/97/O15IDB.jpg",name: "Tedt13"},
          ]} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
</Wrapper>
        <Wrapper>
          <hr />
          <br />
          <h1>Dropmenu</h1>
        </Wrapper>
        <div style={{ display: "block" }}>
          <Dropmenu style={{ float: "right" }} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Wrapper>
          <hr />
          <br />
          <h1>Layout</h1>
        </Wrapper>
        <Layout progress={30}>
          <Page>
            <Wrapper>
              This is my page
              <h1>Title 1 / H1</h1>
              <h2>Title 2 / H2</h2>
              <h3>Title 3 / H3</h3>
              <h4>Title 4 / H4</h4>
              <h5>Title 5 / H5</h5>
              <h6>Title 6 / H6</h6>
            </Wrapper>
          </Page>
        </Layout>
        <Wrapper>
          <hr />
          <br />
          <h1>Card</h1>
        </Wrapper>
        <div>
          <Card type="image" imageUrl="https://placeimg.com/400/300/any" />
          <Card>
            <h1>UX Science progress experiment.</h1>
          </Card>
          <Card
            type="file"
            fileType="application_msword"
            header={
              <React.Fragment>
                "MyFile.txt"
                <Icon
                  type={"bookmark_off"}
                  variant={"grey"}
                  style={{ float: "right" }}
                />
              </React.Fragment>
            }
            footer={
              <React.Fragment>
                <Button success>SEND</Button>
                <Button primary>OPEN</Button>
              </React.Fragment>
            }
          >
            <h1>UX Science progress experiment.</h1>
          </Card>
        </div>
        <Wrapper style={{ clear: "both" }}>
          <hr />
          <br />
          <h1>List</h1>
        </Wrapper>
        <div>
          <List />
        </div>
        <Wrapper>
          <hr />
          <br />
          <h1>Popup</h1>
        </Wrapper>
        <div>
          <Button onClick={this.togglePopupVisible}>Show popup</Button>
          <Button onClick={this.togglePopup2Visible}>
            Show autoclose message
          </Button>
          <Button onClick={this.togglePopup3Visible}>
            Show popup w/ icons
          </Button>
          <br />
          <Popup
            visible={this.state.popupVisible}
            onClose={this.togglePopupVisible}
            footer={
              <React.Fragment>
                <div style={{ width: "100%", textAlign: "left" }}>
                  <Button style={{ float: "right" }} danger>
                    delete
                  </Button>
                  <Button
                    style={{ float: "right" }}
                    onClick={this.togglePopupVisible}
                  >
                    close
                  </Button>
                  Updated on
                  <br />
                  15 Dec 2017
                </div>
              </React.Fragment>
            }
            hint={"This is the hint of the popup"}
          />
          <Popup
            visible={this.state.popup2Visible}
            onClose={this.togglePopup2Visible}
            type={"message"}
            time={5}
            label={"Popup will autoclose in 5 seconds"}
          >
            This is the message body
          </Popup>
          <Popup
            visible={this.state.popup3Visible}
            onClose={this.togglePopup3Visible}
            type={"message"}
            label={
              <React.Fragment>
                <Icon
                  type="files"
                  variant="white"
                  style={{
                    marginRight: 10,
                    marginBottom: -5,
                    marginLeft: -8
                  }}
                  onClick={e => alert(e)}
                />
                Popup with icon
              </React.Fragment>
            }
            footer={
              <div style={{ lineHeight: 2.2, textAlign: "center" }}>
                My Footer
              </div>
            }
          >
            <Icon type="dashboard" style={{ marginRight: 10 }} />
            I'm a cool paragraph that lives inside of an even cooler modal.
            Wins!
          </Popup>
        </div>
        <Wrapper>
          <hr />
          <br />
          <h1>Icons</h1>
        </Wrapper>
        <List
          header={["Icon", "Type", "Variant", "Code"]}
          list={Iconslist}
          footer={null}
        />
        <Wrapper>
          <hr />
          <br />
          <h1>Wrapper</h1>
        </Wrapper>
        <Wrapper>
          <label>
            This is label
            <input type="text" placeholder="Project name" />
          </label>
          <label>
            This is label
            <select>
              <option>My option</option>
            </select>
          </label>
          This is inside a wrapper
          <br />
          <label>
            This is label
            <input type="checkbox" />
          </label>

          Don't have an account? Register one <a href="register.html">here</a>
          .
          <hr size="1" noshade="noshade" />
          <h1>Title 1 / H1</h1>
          <h2>Title 2 / H2</h2>
          <h3>Title 3 / H3</h3>
          <h4>Title 4 / H4</h4>
          <h5>Title 5 / H5</h5>
          <h6>Title 6 / H6</h6>
          <button>My Button</button>
        </Wrapper>
        <Wrapper>
          <hr />
          <br />
          <h1>SCSS Variables</h1>
          <br />
        </Wrapper>
        <List header={["Key", "Value"]} list={SCSSList} footer={null} />
      </div>
    );
  }
}
