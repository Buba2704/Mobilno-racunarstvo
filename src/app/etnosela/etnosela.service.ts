import { Injectable } from '@angular/core';
import {Etnoselo} from './etnoselo.model';
import {HttpClient} from '@angular/common/http';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {userInfo} from 'os';

interface ESData{
  naziv: string;
  opis: string;
  slikaUrl: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class EtnoselaService {
  // Pre observable
  //private _etnosela: Etnoselo[] = [];
  private _etnosela = new BehaviorSubject<Etnoselo[]>([]);
  private _omiljena = new BehaviorSubject<Etnoselo[]>([]);
  private _moja = new BehaviorSubject<Etnoselo[]>([]);




  constructor(private http: HttpClient, private authService: AuthService) {
  }



  get etnosela() {
    // eslint-disable-next-line no-underscore-dangle
    return this._etnosela.asObservable();
  }

  get omiljena() {
    // eslint-disable-next-line no-underscore-dangle
    return this._omiljena.asObservable();
  }
  get moja() {
    // eslint-disable-next-line no-underscore-dangle
    return this._moja.asObservable();
  }



  addEtnoselo(naziv: string, opis: string, slikaUrl: string) {
    let generatedId;
    let novoEs: Etnoselo;
    let fetchedUserID: string;

    return this.authService.userId.pipe(take(1), switchMap(userId => {
        fetchedUserID = userId;
        return this.authService.token;
      }),
      take(1),
      switchMap((token) => {
        novoEs = new Etnoselo(
          null,
          naziv,
          opis,
          slikaUrl,
          fetchedUserID
        );
        return this.http.post<{ name: string }>(`https://ljubicailic20180056-default-rtdb.europe-west1.firebasedatabase.app/etnoselo.json?auth=${token}`, novoEs);
      }),
      take(1),
      switchMap((resData) => {
        generatedId = resData.name;
        return this.etnosela;
      }),
      take(1),
      tap((esData) => {
        novoEs.id = generatedId;
        this._etnosela.next(esData.concat(novoEs));
      })
    );
  }




  getEtnosela() {
    return this.authService.token.pipe(
      take(1),
      switchMap((token) => this.http.get<{ [key: string]: ESData }>
        (`https://ljubicailic20180056-default-rtdb.europe-west1.firebasedatabase.app/etnoselo.json?auth=${token}`)),
      map((esData) => {
        const etnosela: Etnoselo[] = [];

        for (const key in esData) {
          if (esData.hasOwnProperty(key)) {
            etnosela.push({
              id: key,
              naziv: esData[key].naziv,
              opis: esData[key].opis,
              slikaUrl: esData[key].slikaUrl,
              userId: esData[key].userId
            });
          }
        }
        return etnosela;
      }), tap(esData => {
        this._etnosela.next(esData);
      })
    );
  }

  // Za prikaz etnosela na stranici detalji
  // Ne radi, kasnije cu da sredjujem
  /* getEtnoselo(id: string){
     return this.etnosela.find((e:Etnoselo) => e.id === id);
   }*/

  getEtnoselo(id: string) {
    return this.authService.token.pipe(
      take(1),
      switchMap((token) => this.http
          .get<ESData>(`https://ljubicailic20180056-default-rtdb.europe-west1.firebasedatabase.app/etnoselo/${id}.json?auth=${token}`)),
      map((resData) => {
        console.log(resData);
        return new Etnoselo(
          id,
          resData.naziv,
          resData.opis,
          resData.slikaUrl,
          resData.userId,
        );
      })
    );
  }


  addOmiljenoEtnoselo(naziv: string, opis: string, slikaUrl: string) {
    let generatedId;
    let novoEs: Etnoselo;
    let fetchedUserID: string;

    return this.authService.userId.pipe(take(1), switchMap(userId => {
        fetchedUserID = userId;
        return this.authService.token;
      }),
      take(1),
      switchMap((token) => {
        novoEs = new Etnoselo(
          null,
          naziv,
          opis,
          slikaUrl,
          fetchedUserID
        );
        return this.http.post<{ name: string }>(`https://ljubicailic20180056-default-rtdb.europe-west1.firebasedatabase.app/omiljeni.json?auth=${token}`, novoEs);
      }),
      take(1),
      switchMap((resData) => {
        generatedId = resData.name;
        return this.omiljena;
      }),
      take(1),
      tap((esData) => {
        novoEs.id = generatedId;
        this._omiljena.next(esData.concat(novoEs));
      })
    );
  }


  getOmiljenoEtnoselo(id: string) {
    return this.authService.token.pipe(
      take(1),
      switchMap((token) => this.http
          .get<ESData>(`https://ljubicailic20180056-default-rtdb.europe-west1.firebasedatabase.app/omiljeni/${id}.json?auth=${token}`)),
      map((resData) => {
        console.log(resData);
        return new Etnoselo(
          id,
          resData.naziv,
          resData.opis,
          resData.slikaUrl,
          resData.userId,
        );
      })
    );
  }


  getOmiljenaEtnoselaFilterId() {
    let logovaniKorisnik: string;
    return this.authService.userId.pipe(take(1), switchMap(userId => {
        logovaniKorisnik = userId;
        return this.authService.token;
      }),
      take(1),
      switchMap((token) => this.http.get<{ [key: string]: ESData }>
      (`https://ljubicailic20180056-default-rtdb.europe-west1.firebasedatabase.app/omiljeni.json?
      &orderBy="userId"&equalTo="${logovaniKorisnik}"&auth=${token}`)),
      map((esData) => {
        const omiljena: Etnoselo[] = [];

        for (const key in esData) {
          if (esData.hasOwnProperty(key)) {
            omiljena.push({
              id: key,
              naziv: esData[key].naziv,
              opis: esData[key].opis,
              slikaUrl: esData[key].slikaUrl,
              userId: esData[key].userId
            });
          }
        }
        //this.etnosela = etnosela;
        //this._etnosela = etnosela;
        //this._etnosela.next(etnosela);
        return omiljena;
      }), tap(esData => {
        this._omiljena.next(esData);
      })
    );
  }

  getPostojiOmiljeni(naziv: string) {
    console.log('Proba');
    let logovaniKorisnik: string;
    return this.authService.userId.pipe(take(1), switchMap(userId => {
        logovaniKorisnik = userId;
        return this.authService.token;
      }),
      take(1),
      switchMap((token) => this.http.get<{ [key: string]: ESData }>
      (`https://ljubicailic20180056-default-rtdb.europe-west1.firebasedatabase.app/omiljeni.json?
      &orderBy="userId"&equalTo="${logovaniKorisnik}"&auth=${token}`)),
      map((esData) => {
        const etnosela: Etnoselo[] = [];

        for (const key in esData) {
          if (esData.hasOwnProperty(key)) {
            if(esData[key].naziv === naziv){
              return true;
            }
          }
        }
        //this.etnosela = etnosela;
        //this._etnosela = etnosela;
        //this._etnosela.next(etnosela);
        return false;
      })
    );
  }





  deleteOmiljenoEtnoselo(id: string) {
    return this.authService.token.pipe(
      take(1),
      switchMap((token) => {
        return this.http
          .delete(`https://ljubicailic20180056-default-rtdb.europe-west1.firebasedatabase.app/omiljeni/${id}.json?auth=${token}`);
      }),
      switchMap(() => {
        console.log('Usao u delete');
        return this.omiljena;

      }),
      take(1),
      tap((esData) => {
       // this._omiljena.next(esData);
        this._omiljena.next(esData.filter((o) => o.id !== id));
      })
    );
  }



  getPostojiEtnoselo(naziv: string) {
    console.log('Proba');
    return this.authService.token.pipe(
      take(1),
      switchMap((token) => this.http.get<{ [key: string]: ESData }>
      (`https://ljubicailic20180056-default-rtdb.europe-west1.firebasedatabase.app/etnoselo.json?auth=${token}`)),
      map((esData) => {
        const etnosela: Etnoselo[] = [];

        for (const key in esData) {
          if (esData.hasOwnProperty(key)) {
            if(esData[key].naziv === naziv){
              return true;
            }
          }
        }
        //this.etnosela = etnosela;
        //this._etnosela = etnosela;
        //this._etnosela.next(etnosela);
        return false;
      })
    );
  }





  getMojaEtnosela() {
    let logovaniKorisnik: string;
    return this.authService.userId.pipe(take(1), switchMap(userId => {
        logovaniKorisnik = userId;
        return this.authService.token;
      }),
      take(1),
      switchMap((token) => this.http.get<{ [key: string]: ESData }>
      (`https://ljubicailic20180056-default-rtdb.europe-west1.firebasedatabase.app/etnoselo.json?
      &orderBy="userId"&equalTo="${logovaniKorisnik}"&auth=${token}`)),
      map((esData) => {
        const moja: Etnoselo[] = [];

        for (const key in esData) {
          if (esData.hasOwnProperty(key)) {
            moja.push({
              id: key,
              naziv: esData[key].naziv,
              opis: esData[key].opis,
              slikaUrl: esData[key].slikaUrl,
              userId: esData[key].userId
            });
          }
        }
        return moja;
      }), tap(esData => {
        this._moja.next(esData);
      })
    );
  }

}
