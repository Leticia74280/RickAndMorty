import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationPipe } from 'src/app/pipes/pagination.pipe'

import { CharacterListRoutingModule } from './character-list-routing.module';

@NgModule({
  declarations: [PaginationPipe],
  imports: [CommonModule, CharacterListRoutingModule],
})
export class CharacterListModule {}
