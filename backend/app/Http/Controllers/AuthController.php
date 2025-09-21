<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\PasswordEmail;
use Illuminate\Support\Facades\Mail;

use DB;

class AuthController extends Controller
{
    public function login(Request $request){

        $result = DB::select('select * from Users where email=? ', array($request->email) );

        if(count($result)>0){

            foreach($result as $r){
                if(password_verify($request->password, $r->password)==true){
                    return $result;
                }else{
                    return [];
                }
            }

        }else{
            return  [];
        }


    }


    public function business_details(Request $request){
        $result = DB::select('select * from Accounts where userId=? ', array($request->user_id) );
        return $result;
    }



    public function user_details(Request $request){
        $result = DB::select('select * from Users where email=? ', array($request->email) );
        return $result;
    }


    public function user_transactions(Request $request){
        $result = DB::select('select * from orderPayments where paidBy=? ', array($request->user_id) );
        return $result;
    }


    public function send_money(Request $request){

      $data = DB::select('select * from Users where email=? ', array($request->receiver) );

      if(count($data)>0){

        #get sender balance
        $result = DB::select('select * from Users where email=? ', array($request->sender) );
        foreach($result as $r){
          $sender_balance = $r->balance;
          $new_sender_balance = $sender_balance-$request->amount;
        }

        if($request->amount>$sender_balance){
          return 'insufficient';
        }else {
          #get receiver balance
          foreach($data as $d){
            $receiver_balance = $d->balance;
            $new_receiver_balance = $receiver_balance+$request->amount;
          }
          #update records
          DB::update('update Users set balance=? where email=? ', array($new_sender_balance,$request->sender));
          DB::update('update Users set balance=? where email=? ', array($new_receiver_balance,$request->receiver));

          #add transaction to table
          DB::insert('insert into money_sent(sender,receiver,amount,comment) values(?,?,?,?) ', array($request->sender, $request->receiver,$request->amount,'Amount send/received') );
          return 'success';

        }


      }else{
        return 'no-email';
      }

    }



    public function money_sent(Request $request){
      $result = DB::select('select  * from money_sent where sender=? limit 5 ', array($request->email) );
      return $result;
    }


    public function register(Request $request){
      $result = DB::select('select * from Users where email=? ', array($request->email) );
      if(count($result)>0){
        return 'An account with that email already exists';
      }else{
        $full_name = $request->first_name.' '.$request->last_name;

      DB::insert('insert  into Users(userType,fullName,email,phoneNumber,address,password,companyName)  values(?,?,?,?,?,?,?)', array($request->account_type, $full_name, $request->email, $request->phone, $request->address, bcrypt($request->password), $request->company_name ) );
      return 'Account created suuccessfully';
      }
    }


    public function edit_account(Request $request){
      DB::update('update Users set fullName=?, address=?, phoneNumber=? where email=? ', array($request->full_name,$request->address,$request->phone,$request->email) );

      if($request->password!=''){
        DB::update('update Users set password=? where email=? ', array(bcrypt($request->password),$request->email) );
      }

      return 'Changes saved suuccessfully';
    }

    public function create_shop(Request $request){
      $result = DB::select('select * from Accounts where name=?', array($request->company_name));
      $result_2 = DB::select('select * from Accounts where email=?', array($request->email));
      if(count($result)>0){
        return 'A shop with that email already exists';
      }else if(count($result_2)>0){
        return 'A shop with that email already exists';
      }else{
        DB::insert('insert into Accounts(name,email,location,accountType,userId) values(?,?,?,?,?) ', array($request->company_name, $request->email, $request->location, $request->account_type, $request->user_id) );
        return 'Account created suuccessfully';
      }
    }

    public function forgot_password(Request $request){

      $result = DB::select('select * from Users where email=? ', array($request->email) );
      if(count($result)>0){
        $password = rand(1000,10000);
        $details = ['message'=>'Your new password is: '.$password];

        DB::update('update Users set password=? where email=? ', array(bcrypt($password), $request->email ) );

        Mail::to($request->email)->send(new PasswordEmail($details));
        return 'A message with your new password has been sent to your email address.Use it to login to your account';
      }else{
      return 'Email address not found!';
      }

    }

}
