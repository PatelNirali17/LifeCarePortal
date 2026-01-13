import { Routes } from "@angular/router";
import { RoomMasterComponent } from "./room-master/page/room-master/room-master.component";
import { BedMasterComponent } from "./bed-master/page/bed-master/bed-master.component";
import { AllotRoomComponent } from "./allot-room/page/allot-room/allot-room.component";
import { RoomAvailabilityComponent } from "./room-availability/page/room-availability/room-availability.component";
import { RoomTransferComponent } from "./room-transfer/page/room-transfer/room-transfer.component";
import { RoomReleaseComponent } from "./room-release/page/room-release/room-release.component";


export const RoomAllotmentRoutesList: Routes = [
    { path: 'roommaster', component: RoomMasterComponent, data: { breadcrumb: 'Room Master' } },
    { path: 'bedmaster', component: BedMasterComponent, data: { breadcrumb: 'Bed Master' } },
    { path: 'allotroom', component: AllotRoomComponent, data: { breadcrumb: 'Allot Room' } },
    { path: 'roomtransfer', component: RoomTransferComponent, data: { breadcrumb: 'Room Transfer' } },
    { path: 'roomavailability', component: RoomAvailabilityComponent, data: { breadcrumb: 'Room Availability' } },
    { path: 'roomrelease', component: RoomReleaseComponent, data: { breadcrumb: 'Room Release' } },
]