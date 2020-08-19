import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class Header extends Component {
  state = { activeItem: "Minitube" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="Minitube"
            active={activeItem === "Minitube"}
            onClick={this.handleItemClick}
          >
            Mini<span className="tube">tube</span>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="View Other Projects"
              active={activeItem === "View Other Projects"}
              onClick={this.handleItemClick}
            >
              <a
                className="other-projects"
                href="https://www.bryndonhumphrey.com/projects.html"
              >
                View Other Projects
              </a>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
