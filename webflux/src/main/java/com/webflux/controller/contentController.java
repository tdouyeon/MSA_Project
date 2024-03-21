package com.webflux.controller;

import com.webflux.dto.PostingDto;
import com.webflux.service.PostingService;
import com.webflux.vo.RequestPosting;
import com.webflux.vo.ResponsePosting;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
public class contentController {
    @Autowired
    PostingService postingService;

    @GetMapping("/list")
    // page 필요하다면 추가
    public ResponseEntity<List<PostingDto>> showList() {
        List<PostingDto> pagePostings = postingService.findAll();
        return ResponseEntity.status(HttpStatus.CREATED).body(pagePostings);
    }

    @PostMapping("/create")
    public ResponseEntity<ResponsePosting> createPosting(@RequestBody RequestPosting requestPosting) {
        ModelMapper mapper = new ModelMapper();
        PostingDto postingDto = mapper.map(requestPosting, PostingDto.class);
        PostingDto resultDto = postingService.createPosting(postingDto);
        ResponsePosting responsePosting = mapper.map(resultDto, ResponsePosting.class);
        return ResponseEntity.status(HttpStatus.CREATED).body(responsePosting);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ResponsePosting> updatePosting(@PathVariable Long id, @RequestBody RequestPosting requestPosting) throws Exception {
        ModelMapper mapper = new ModelMapper();
        PostingDto postingDto = mapper.map(requestPosting, PostingDto.class);
        PostingDto resultDto = postingService.updatePosting(id, postingDto);
        ResponsePosting responsePosting = mapper.map(resultDto, ResponsePosting.class);
        return ResponseEntity.status(HttpStatus.OK).body(responsePosting);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePosting(@PathVariable Long id) throws UserPrincipalNotFoundException {
        String message = postingService.deletePosting(id);
        return ResponseEntity.status(HttpStatus.OK).body(message);
    }
}
