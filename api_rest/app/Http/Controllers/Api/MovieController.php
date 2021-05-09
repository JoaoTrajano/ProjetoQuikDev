<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class MovieController extends Controller
{
    public function getMoviePopularAlls()
    {

        $url = "https://api.themoviedb.org/3/movie/popular?api_key=4ec327e462149c3710d63be84b81cf4f";
        $this->response = json_decode(file_get_contents($url));

        return response()->json($this->response);
    }


    public function getMovieSearch($valueFilter)
    { 
        $url = "https://api.themoviedb.org/3/search/movie?api_key=4ec327e462149c3710d63be84b81cf4f&query=".$valueFilter;
        $this->response = json_decode(file_get_contents($url));

        return response()->json($this->response);
    }

    public function getGenre()
    { 
       
        $url = "https://api.themoviedb.org/3/genre/movie/list?api_key=4ec327e462149c3710d63be84b81cf4f";
        $this->response = json_decode(file_get_contents($url));

        return response()->json($this->response);
    }

    public function getDetailsMovie($idMovie)
    {
        $url = "https://api.themoviedb.org/3/movie/".$idMovie."?api_key=4ec327e462149c3710d63be84b81cf4f";
        $this->response = json_decode(file_get_contents($url));

        return response()->json($this->response);
    }
}
