import React, { useState } from 'react';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import * as options from './options';
import _ from 'lodash';
import { MdDone } from 'react-icons/md'

const styles = {
  container: {
    width: "200px"
  },
  DropdownToggle: {
    width: "100%",
  }
  ,
  item: {
    display: "flex",
    justifyContent: "space-between"
  }
}


export default (props) => {
  const [roles, setRoles] = useState(options.roles)
  const [admin, setAdmin] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const onClick = (role, index) => {
    setRoles([
      ..._.slice(roles, 0, index),
      { ...role, isPicked: !role.isPicked },
      ..._.slice(roles, index + 1)
    ])
  }
  const disableAll = () => {
    setRoles(_.map(roles, r => ({ ...r, isPicked: false })))
  }

  const handleSubmit = () => {
    const data = _.map(_.filter(roles, r => r.isPicked), r => ({ name: r.name }))
    alert(JSON.stringify(data, null, 2))
  }
  return (
    <div style={styles.container}>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle style={styles.DropdownToggle} caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu
          modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: (data) => {
                return {
                  ...data,
                  styles: {
                    ...data.styles,
                    overflow: 'auto',
                    width: 'inherit',
                  },
                };
              },
            },
          }}
        >
          <DropdownItem
            style={styles.item}
            onClick={() => {
              setAdmin(!admin)
              disableAll()
            }}
            toggle={false}
          >
            <div>Admin</div>
            <div>{admin && <MdDone />}</div>
          </DropdownItem>
          <DropdownItem divider />
          {
            _.map(roles, (role, index) => {
              return (
                <DropdownItem
                  disabled={admin}
                  style={styles.item}
                  onClick={() => onClick(role, index)}
                  toggle={false}
                >
                  <div>{role.name}</div>
                  <div>{role.isPicked && <MdDone />}</div>
                </DropdownItem>
              )
            })
          }
        </DropdownMenu>
      </Dropdown>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}