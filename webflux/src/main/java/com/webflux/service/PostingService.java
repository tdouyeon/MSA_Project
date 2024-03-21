package com.webflux.service;

import com.webflux.dto.PostingDto;
import com.webflux.entity.Posting;
import com.webflux.repository.PostingRepository;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class PostingService {
    @Autowired
    PostingRepository postingRepository;

    public List<PostingDto> findAll() {
        ModelMapper mapper = new ModelMapper();
        List<Posting> postings = postingRepository.findAllByOrderByIdDesc();
        List<PostingDto> postingDtos = new ArrayList<>();
        for (Posting posting : postings) {
            PostingDto postingDto = mapper.map(posting, PostingDto.class);
            postingDtos.add(postingDto);
        }
        return postingDtos;
    }

    public PostingDto createPosting(PostingDto postingDto) {

        postingDto.setRegTime(LocalDateTime.now());
        ModelMapper mapper = new ModelMapper();
        Posting posting = mapper.map(postingDto, Posting.class);
        postingRepository.save(posting);
        return mapper.map(posting, PostingDto.class);
    }

    public PostingDto updatePosting(Long id, PostingDto postingDto) throws Exception {
        Posting posting = postingRepository.findPostingById(id);
        if (posting == null) {
            throw new EntityNotFoundException("수정할 게시글이 없습니다.");
        }
        if (!posting.getEmail().equals(postingDto.getEmail())) {
            throw new UserPrincipalNotFoundException("등록자와 다른 사용자입니다.");
        }
        posting.setTitle(postingDto.getTitle());
        posting.setPost_content(postingDto.getPost_content());
        ModelMapper mapper = new ModelMapper();
        return mapper.map(posting, PostingDto.class);
    }

    public String deletePosting(Long id) {
        try {
            postingRepository.deleteById(id);
        } catch (Exception e) {
            return e.getMessage();
        }
        return "삭제가 완료되었습니다.";
    }


}
