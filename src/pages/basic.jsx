import React, { Component } from 'react'
import Nav from '../components/nav'
import '../css/basic.css'
export default class basic extends Component {
  render() {
    return (
      <div>
           <Nav/>
           <h1>Mobile Fixed Bottom Nav</h1>
<h2>Bottom</h2>

<nav class="mobile-bottom-nav">
	<div class="mobile-bottom-nav__item mobile-bottom-nav__item--active">
		<div class="mobile-bottom-nav__item-content">
         <i id='icon' class="fa-solid fa-house"></i>
			Asosiy
		</div>		
	</div>
	<div class="mobile-bottom-nav__item">		
		<div class="mobile-bottom-nav__item-content">
        <i class="fa-solid fa-magnifying-glass"></i>
			Kompaniya
		</div>
	</div>
    <div class="mobile-bottom-nav__item">		
		<div class="mobile-bottom-nav__item-content">
        <i class="fa-solid fa-square-plus"></i>
			Yaratish
		</div>
	</div>
	<div class="mobile-bottom-nav__item">
		<div class="mobile-bottom-nav__item-content">
        <i class="fa-regular fa-comments"></i>
			Chat
		</div>		
	</div>
	
	<div class="mobile-bottom-nav__item">
		<div class="mobile-bottom-nav__item-content">
        <i class="fa-solid fa-inbox"></i>
			Xabarlar
		</div>		
	</div>
</nav> 
      </div>
    )
  }
}
