import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
	title = 'signzyblog';
	public ngOnInit() {
		$('#toggle').click(function() {
			$('#Cmenu').toggleClass('closed');
			$('#backscreenInfo, backscreenInfos').toggleClass('fixScreen');
			$('.menu-second').addClass('closed-second');
			$(this).toggleClass('closed');
			$('#wrapper').toggleClass('closed');
		});
		$('#new_t').click(function() {
			$('#toggle').toggleClass('closed');
			$('#backscreenInfo, #backscreenInfos').toggleClass('fixScreen');
			$('#Cmenu').toggleClass('closed');
			$('.menu-second').addClass('closed-second');
			$(this).toggleClass('closed');
			$('#wrapper').toggleClass('closed');
		});
		$('#open_second').click(function() {
			$('.menu-second').toggleClass('closed-second');
		});
		$('#type_product').click(function() {
			$('.menu-second').addClass('closed-second');
		});
		$('#homePage').click(function() {
			alert('fd');
			$('#Cmenu').removeClass('closed');
			$('#toggle').removeClass('closed');
			$('#backscreenInfo, #backscreenInfos').removeClass('fixScreen');
		});
	}
}
