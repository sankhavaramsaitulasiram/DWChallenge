import React, { Component } from 'react';

const styles = {
    header: {
        backgroundColor: 'rgba(0, 14, 34, 0.9)',
        height: '8vh',
        fontSize: 15,
        color: 'white',
        textTransform: 'uppercase',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    listItems: {
        verticalAlign: 'middle',
        alignSelf: 'center',
        marginLeft: 20
    },
    listItemsLogo: {
        maxWidth: '10%',
        fontSize: 25,
        verticalAlign: 'middle',
        textAlign: 'center',
    },
    middle: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: '10%',
        width: '60%'
    },
    cartIcon: {
        alignSelf: 'center',
        verticalAlign: 'middle',
        marginLeft: '20%'
    }
};


export default class Header extends Component {
    render() {
        return (
            <header  style={styles.header}>
      <div style={styles.listItemsLogo}>DW</div>
        <div  style={styles.middle}>
      <div style={styles.listItems}>NEWS</div>
      <div style={styles.listItems}>All watches</div>
      <div style={styles.listItems}>Accessories</div>
      <div style={styles.listItems}>Watch Straps</div>
      <div style={styles.listItems}>Gift Cards</div>
      <div style={styles.listItems}>Store Locations</div>
      </div>
      <div style={styles.cartIcon}>
      cart
      </div>
     </header>
        );
    }
}