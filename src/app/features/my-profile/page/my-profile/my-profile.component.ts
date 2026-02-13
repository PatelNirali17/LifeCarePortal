import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-profile',
  imports: [SharedModule,CommonModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {

  user = {
    name: 'John Smith',
    role: 'Software Engineer',
    address: '456, Estern evenue, Courtage area, New York',
    phone: '264-625-2583',
    avatar: 'https://i.pravatar.cc/150?img=68',
    cover: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    stats: {
      following: 564,
      followers: '18k',
      posts: 565
    },
    intro: {
      about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      email: 'john@gmail.com',
      phone: '+91 1234567890'
    },
    details: {
      fullName: 'Emily Smith',
      mobile: '(123) 456 7890',
      email: 'johndeo@example.com',
      location: 'India',
      bio: [
        'Completed my graduation in Arts from the well known and renowned institution of India – SARDAR PATEL ARTS COLLEGE, BARODA in 2000-01, which was affiliated to M.S. University. I ranker in University exams from the same university from 1996-01.',
        'Worked as Professor and Head of the department at Sarda Collage, Rajkot, Gujarat from 2003-2015',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
      ],
      education: [
        'B.A.,Gujarat University, Ahmedabad,India.',
        'M.A.,Gujarat University, Ahmedabad, India.',
        'P.H.D., Shaurashtra University, Rajkot'
      ],
      experience: [
        'One year experience as Jr. Professor from April-2009 to march-2010 at B. J. Arts College, Ahmedabad.',
        'Three year experience as Jr. Professor at V.S. Arts & Commerse Collage from April - 2008 to April - 2011.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      ],
      conferences: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      ]
    }
  };
}
